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
  path("get-details",UserDetailAPI.as_view()),
  path('register',RegisterUserAPIView.as_view()),
  path('login', LoginAPIView.as_view()),
  path('analyze-site', AnalyzeSiteAPI.as_view()),
  path('register-site-for-contact', RegisterSiteForContactAPI.as_view()),
  path('site-analysis-results/<int:id>', AnalyzeSiteResultsAPI.as_view()),
  path('celery-task/<str:task_id>', CeleryResultAPI.as_view())
]
