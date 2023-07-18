from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name="user")

    def serialize(self):
        return{
            "id" : self.profile,
        }
class posts(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="Profile", default="")
    title = models.CharField(max_length=30)
    content = models.CharField(max_length=500)
    timestamp = models.DateTimeField()

    def serialize(self):
        return{
            "post_id" : self.id,
            "profileid" : self.profile.user.id,
            "profile" : self.profile.user.username,
            "title" : self.title,
            "content" : self.content,
            "timestamp" : self.timestamp.strftime("%b %d %Y, %I:%M %p"),
        }
