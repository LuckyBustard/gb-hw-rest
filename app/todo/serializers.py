from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import DateTimeField, PrimaryKeyRelatedField, SlugRelatedField, CurrentUserDefault
from todo.models import Project, Task
from users.models import AppUser


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(ModelSerializer):
    created_at = DateTimeField(format='%d.%m.%Y %H:%M:%S', required=False, read_only=True)
    updated_at = DateTimeField(format='%d.%m.%Y %H:%M:%S', required=False, read_only=True)
    creator_name = SlugRelatedField(read_only=True, source='creator', slug_field='username')
    creator = PrimaryKeyRelatedField(queryset=AppUser.objects, default=CurrentUserDefault())


    class Meta:
        model = Task
        fields = '__all__'
