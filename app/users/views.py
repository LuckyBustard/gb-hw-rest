from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, ListModelMixin, UpdateModelMixin
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer
from .models import AppUser
from .serializers import AppUserModelSerializer


class AppUserModelViewSet(GenericViewSet, RetrieveModelMixin, ListModelMixin, UpdateModelMixin):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = AppUser.objects.all()
    serializer_class = AppUserModelSerializer
