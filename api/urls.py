from django.urls import path
from api.views import (
    UserDetailAPI,
    RegisterUserAPIView,
    LoginAPIView,
    AnalyzeSiteAPI,
    RegisterSiteForContactAPI,
    AnalyzeSiteResultsAPI,
    CeleryResultAPI)

urlpatterns = [
    path("get-details",UserDetailAPI.as_view(), name="user-details"),
    path('register',RegisterUserAPIView.as_view(), name="user-register"),
    path('login', LoginAPIView.as_view(), name="user-login"),
    path('analyze-site', AnalyzeSiteAPI.as_view(), name="analyze-site"),
    path('register-site-for-contact', RegisterSiteForContactAPI.as_view(), name="site-contact-register"),
    path('site-analysis-results/<int:id>', AnalyzeSiteResultsAPI.as_view(), name="site-analysis-results"),
    path('celery-task/<str:task_id>', CeleryResultAPI.as_view(), name="celery-task-map"),
]
