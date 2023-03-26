import graphene
from graphene_django import DjangoObjectType
from todo.models import Task, Project
from users.models import AppUser


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TaskType(DjangoObjectType):
    class Meta:
        model = Task
        fields = '__all__'


class AppUserType(DjangoObjectType):
    class Meta:
        model = AppUser
        fields = '__all__'


class TaskMutation(graphene.Mutation):
    class Arguments:
        text = graphene.String(required=True)
        id = graphene.ID()

    task = graphene.Field(TaskType)

    @classmethod
    def mutate(cls, root, info, text, id):
        task = Task.objects.get(id=id)
        task.text = text
        task.save()
        return TaskMutation(task=task)


class Mutation(graphene.ObjectType):
    update_task = TaskMutation.Field()


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    all_tasks = graphene.List(TaskType)
    all_projects = graphene.List(ProjectType)
    project_by_id = graphene.Field(ProjectType, id=graphene.Int(required=True))
    task_by_id = graphene.Field(TaskType, id=graphene.Int(required=True))

    def resolve_all_tasks(self, info):
        return Task.objects.all()

    def resolve_all_projects(self, info):
        return Project.objects.all()

    def resolve_project_by_id(self, info, id):
        try:
            return Project.objects.get(id=id)
        except:
            return None

    def resolve_task_by_id(self, info, id):
        try:
            return Task.objects.get(id=id)
        except:
            return None


schema = graphene.Schema(query=Query, mutation=Mutation)
