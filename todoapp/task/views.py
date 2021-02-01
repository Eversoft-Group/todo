from rest_framework import generics
from .serializers import TaskSerializer
from .models import Task
from rest_framework import permissions, status
from rest_framework.response import Response

class TaskListView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def post(self, request, *args, **kwargs):
        serializer=TaskSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"detail": serializer.data}, status=status.HTTP_201_CREATED)

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    

