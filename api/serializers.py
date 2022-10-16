
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

from api.models import (
    UserInfo, Collection, Site)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username"]


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
      required=True,
      validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
      write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2',
             'email', 'first_name', 'last_name')
        extra_kwargs = {
          'first_name': {'required': True},
          'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
          raise serializers.ValidationError(
            {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
          username=validated_data['username'],
          email=validated_data['email'],
          first_name=validated_data['first_name'],
          last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = "__all__"


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = "__all__"
