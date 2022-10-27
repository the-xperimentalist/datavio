from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):

    INSTAGRAM = 1
    FACEBOOK = 2
    WORD_OF_MOUTH = 3
    DATAVIO_TEAM = 4
    OTHERS = 5

    HOW_FOUND_US_CHOICES = [
        [INSTAGRAM, "INSTAGRAM"],
        [FACEBOOK, "FACEBOOK"],
        [WORD_OF_MOUTH, "WORD_OF_MOUTH"],
        [DATAVIO_TEAM, "DATAVIO_TEAM"],
        [OTHERS, "OTHERS"]]

    associated_user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    phone_no = models.IntegerField(blank=False)
    how_found_us = models.IntegerField(choices=HOW_FOUND_US_CHOICES, default=OTHERS)
    is_anonymous = models.BooleanField(default=False)


class Collection(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=2047)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)


class Site(models.Model):

    AMAZON = 1
    FLIPKART = 2
    MYNTRA = 3
    NYKAA = 4
    AJIO = 5

    url = models.URLField()
    ecomm = models.IntegerField()
    category = models.CharField(max_length=255)
    created_time = models.DateTimeField(auto_now_add=True)
    collection = models.ForeignKey(Collection, on_delete=models.SET_NULL, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
