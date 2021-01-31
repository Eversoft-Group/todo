from django.db import models
from django.contrib.auth.models import User

CHOICES = (
    (0 , 'Todo'),
    (1 , 'In Progress'),
    (2 , 'Done')
)

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True, null=True)
    user = models.ForeignKey(User, related_name='todos_users', on_delete=models.CASCADE)
    status = models.IntegerField(choices=CHOICES, default=CHOICES[0][0])

    class Meta:
        ordering = ['title',]

    def __str__(self):
        return f"{self.title} need to be done by {self.user.username}"
