from django.db import models
from users.models import AppUser


class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True,)
    repository_link = models.CharField(max_length=200, unique=True)
    users = models.ManyToManyField(AppUser)


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    project = models.OneToOneField(Project, on_delete=models.DO_NOTHING)
    creator = models.OneToOneField(AppUser, on_delete=models.DO_NOTHING)
    text = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
