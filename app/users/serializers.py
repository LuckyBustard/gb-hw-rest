from rest_framework.serializers import HyperlinkedModelSerializer
from .models import AppUser


class AppUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = AppUser
        fields = ['url', 'username', 'email', 'first_name', 'last_name']
