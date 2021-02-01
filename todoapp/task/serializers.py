from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {'user': {'write_only': True, 'required': False}}

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)