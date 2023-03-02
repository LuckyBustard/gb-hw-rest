from rest_framework.serializers import HyperlinkedModelSerializer
from todo.models import Project, Task


class ProjectSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
