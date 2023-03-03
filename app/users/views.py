from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, ListModelMixin, UpdateModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from .models import AppUser
from .serializers import AppUserModelSerializer


class AppUserModelViewSet(GenericViewSet, RetrieveModelMixin, ListModelMixin, UpdateModelMixin):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = AppUser.objects.all()
    serializer_class = AppUserModelSerializer
