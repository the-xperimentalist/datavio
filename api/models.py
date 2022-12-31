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


class ContactUser(models.Model):
    name = models.CharField(max_length=1023)
    phone = models.CharField(max_length=15)
    email = models.EmailField()


class AnalyzeSite(models.Model):

    url = models.CharField(max_length=2047)
    requested_at = models.DateTimeField(auto_now_add=True)
    requested_by = models.ForeignKey(ContactUser, null=True, blank=True, on_delete=models.CASCADE)
    site_data = models.JSONField()
    fetched_infos = models.JSONField(default=[])
    to_contact_user = models.BooleanField(default=False)
    # user to be contacted if requested_by is present, and all keys are filled in site_data
