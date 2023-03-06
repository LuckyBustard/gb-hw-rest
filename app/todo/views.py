from django.utils.timezone import now
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer
from .pagination import ProjectsModelLimitOffsetPagination, TodoModelLimitOffsetPagination
from .filters import ProjectFilter, TaskFilter


class ProjectsModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectsModelLimitOffsetPagination
    filterset_class = ProjectFilter


class TaskModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    pagination_class = TodoModelLimitOffsetPagination
    filterset_class = TaskFilter

    def perform_destroy(self, instance):
        """
        :param Task instance:
        :return:
        """
        instance.closet_at = now()
        instance.save()
