from rest_framework.serializers import ModelSerializer
from .models import AppUser


class AppUserModelSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['url', 'username', 'email', 'first_name', 'last_name', 'id']
