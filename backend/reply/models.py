from xml.etree.ElementTree import Comment
from django.db import models
from authentication.models import User
from .models import Comment

# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)