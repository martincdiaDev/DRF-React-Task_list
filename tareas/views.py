from rest_framework import viewsets
from .serializer import TaskSerializers
from .models import Task

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()
