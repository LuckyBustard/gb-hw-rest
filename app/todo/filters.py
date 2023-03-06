from django_filters import rest_framework as filters
from .models import Project, Task


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains', field_name='name')

    class Meta:
        model = Project
        fields = ['name']


class TaskFilter(filters.FilterSet):
    project = filters.ModelChoiceFilter(queryset=Project.objects.all(), to_field_name='id')
    from_created_at = filters.DateTimeFilter(field_name='created_at', lookup_expr='gte')
    to_created_at = filters.DateTimeFilter(field_name='created_at', lookup_expr='lte')

    class Meta:
        model = Task
        fields = ['project', 'from_created_at', 'to_created_at']
