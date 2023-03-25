from rest_framework.serializers import ModelSerializer
from .models import AppUser


class AppUserModelSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['username', 'email', 'first_name', 'last_name']

class AppFullUserModelSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['username', 'email', 'first_name', 'last_name', 'is_superuser', 'is_staff']
