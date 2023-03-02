from rest_framework.viewsets import ModelViewSet
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer


class ProjectsModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TaskModelViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
