from rest_framework.pagination import LimitOffsetPagination


class ProjectsModelLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoModelLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20
