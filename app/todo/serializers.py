from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import DateTimeField, RelatedField
from todo.models import Project, Task


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(ModelSerializer):
    created_at = DateTimeField(format='%d.%m.%Y %H:%M:%S')
    updated_at = DateTimeField(format='%d.%m.%Y %H:%M:%S')

    class Meta:
        model = Task
        fields = '__all__'
