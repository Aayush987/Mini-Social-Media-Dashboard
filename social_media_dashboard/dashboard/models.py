from django.db import models
from django.contrib.auth.models import User


class DashboardStatistics(models.Model):
    total_posts = models.IntegerField(default=0)
    total_likes = models.IntegerField(default=0)
    total_comments = models.IntegerField(default=0)
    total_shares = models.IntegerField(default=0)


class SocialMediaPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    # scheduled_time = models.DateTimeField(null=True, blank=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)

# Create your models here.
