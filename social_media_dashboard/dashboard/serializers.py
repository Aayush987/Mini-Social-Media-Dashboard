# dashboard/serializers.py
from rest_framework import serializers
from .models import DashboardStatistics, SocialMediaPost

class DashboardStatisticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DashboardStatistics
        fields = '__all__'

class SocialMediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaPost
        fields = ['title', 'description', 'likes', 'shares', 'comments']
