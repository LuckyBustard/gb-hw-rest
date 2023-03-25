from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, ListModelMixin
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer
from .models import AppUser
from .serializers import AppUserModelSerializer, AppFullUserModelSerializer


class AppUserModelViewSet(GenericViewSet, RetrieveModelMixin, UpdateModelMixin, ListModelMixin):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = AppUser.objects.all()
    serializer_class = AppUserModelSerializer

    def list(self, request, *args, **kwargs):
        if request.version == 'v2':
            self.serializer_class = AppFullUserModelSerializer
        return super().list(request, *args, **kwargs)