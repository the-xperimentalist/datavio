
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework import generics, viewsets
from api.serializers import (
    UserSerializer, RegisterSerializer, UserInfoSerializer, CollectionSerializer, SiteSerializer)
from api.models import (
    Collection, UserInfo, Site)


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
