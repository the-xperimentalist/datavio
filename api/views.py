
import requests
from bs4 import BeautifulSoup
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, viewsets, status
from celery.result import AsyncResult

from api.serializers import (
    UserSerializer, RegisterSerializer, UserInfoSerializer, CollectionSerializer, SiteSerializer)
from api.models import (
    Collection,
    UserInfo,
    Site,
    ContactUser,
    AnalyzeSite)
from api.tasks.fk_tasks import (
    get_fk_reviews,
    get_sellers_info,
    get_product_summary)
from api.utils.constants import (
    REVIEW_INSIGHTS_STATE,
    KEYWORD_ANALYSIS_STATE,
    PRICE_HISTORY_STATE,
    PRODUCT_SPY_STATE,
    REVENUE_INSIGHTS_STATE,
    SELLER_INFO_STATE,
    SUMMARY_STATE)
from api.utils.scrapers.fk_scrape import summary_fk_link


class UserDetailAPI(APIView):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (AllowAny,)

    def get(self,request,*args,**kwargs):
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(user)
        user_info = UserInfo.objects.get(associated_user=user)
        user_info_serializer = UserInfoSerializer(user_info)
        return Response(serializer.data.update(user_info_serializer.data))


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        user = auth.authenticate(username=username, password=password)
        auth.login(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class CollectionViewset(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    serializer_class = CollectionSerializer

    def get_queryset(self):
        return Collection.objects.filter(created_by=self.request.user)


class SiteViewset(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    serializer_class = SiteSerializer

    def get_queryset(self):
        return Site.objects.filter(created_by=self.request.user)


class AnalyzeSiteAPI(APIView):

    def post(self, request, *args, **kwargs):
        """
        We post with the url and create an object of analyzesite with the respective tasks
        In case of the user requesting details sent to them. We ask the user details with the id
        """
        print(request.data)
        print("H1")
        url = request.data["url"]
        site_analyses = AnalyzeSite.objects.filter(url=url)
        if site_analyses.count():
            site_analysis = site_analyses.first()
        else:
            site_analysis = AnalyzeSite(url=url, site_data={}, fetched_infos=[])
            site_analysis.save()
        print("H2")
        return_json = {}
        return_json["id"] = site_analysis.id

        print("H3")
        # summary
        summary_task = get_product_summary.delay(site_analysis.id)
        return_json["summary_task"] = summary_task.task_id
        return_json["summary"] = summary_fk_link(url)

        print("H4")
        product_html = requests.get(url)
        product_soup = BeautifulSoup(product_html.content, "html5lib")
        sellers_href_link = product_soup.find("li", {"class": "_38I6QT"}).findChildren("a", recursive=False)[0].attrs["href"]
        # sellers info
        sellers_info_task = get_sellers_info.delay(site_analysis.id, sellers_href_link)
        return_json["sellers_info"] = sellers_info_task.task_id

        print("H5")
        # reviews
        reviews_url = product_soup.find("div", {"class": "_3UAT2v _16PBlm"}).parent.attrs["href"]
        reviews_task = get_fk_reviews.delay(site_analysis.id, reviews_url)
        return_json["reviews"] = reviews_task.task_id

        return Response(return_json, status=status.HTTP_200_OK)


class RegisterSiteForContactAPI(APIView):

    def post(self, request, *args, **kwargs):
        """
        We register a contact form for the site such that when the requests are completed,
        an email and whatsapp ping is sent to the user with the analysis details
        """
        site_analysis = AnalyzeSite.objects.get(id=request.data["id"])
        contact_user = ContactUser(name=request.data["name"],
            phone=request.data["phone"], email=request.data["email"])
        contact_user.save()
        site_analysis.requested_by = contact_user
        site_analysis.save()

        return Response(status=status.HTTP_200_OK)


class AnalyzeSiteResultsAPI(APIView):

    def get(self, request, *args, **kwargs):
        """
        We get all the analyzed site details as part of this api
        """
        site_analysis = AnalyzeSite.objects.get(id=self.kwargs["id"])
        return_json = {}
        all_info_fetched = False
        if REVENUE_INSIGHTS_STATE in site_analysis.fetched_infos and SELLER_INFO_STATE in site_analysis.fetched_infos and SUMMARY_STATE in site_analysis.fetched_infos:
            all_info_fetched = True
        return_json["id"] = site_analysis.id
        return_json["url"] = site_analysis.url
        if all_info_fetched:
            return_json["all_fetched"] = True
            return_json["site_data"] = site_analysis.site_data
        else:
            return_json["all_fetched"] = False
        return Response(return_json, status=status.HTTP_200_OK)



class CeleryResultAPI(APIView):

    def get(self, request, *args, **kwargs):
        """
        Get celery task result status
        """
        task_id = self.kwargs["task_id"]
        task_result = AsyncResult(task_id)
        return Response({"status": task_result.status})
