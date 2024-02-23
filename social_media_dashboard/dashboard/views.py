from ipaddress import summarize_address_range
from math import sumprod
from django.shortcuts import render
from rest_framework import generics
from .models import SocialMediaPost
from .serializers import SocialMediaPostSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SocialMediaPost, DashboardStatistics
from .serializers import DashboardStatisticsSerializer
from django.db.models import Sum
from rest_framework.generics import CreateAPIView
from rest_framework.parsers import MultiPartParser, FormParser

class DashboardStatisticsView(APIView):
    def get(self, request, *args, **kwargs):
        total_posts = SocialMediaPost.objects.count()
        total_likes = SocialMediaPost.objects.aggregate(Sum('likes'))['likes__sum'] or 0
        total_comments = SocialMediaPost.objects.aggregate(Sum('comments'))['comments__sum'] or 0
        total_shares = SocialMediaPost.objects.aggregate(Sum('shares'))['shares__sum'] or 0

        stats_data = {
            'total_posts': total_posts,
            'total_likes': total_likes,
            'total_comments': total_comments,
            'total_shares': total_shares,
        }

        # Update or create DashboardStatistics entry
        statistics, _ = DashboardStatistics.objects.update_or_create(id=1, defaults=stats_data)

        serializer = DashboardStatisticsSerializer(statistics)
        return Response(serializer.data)

class SocialMediaPostWithLikesCommentsCreateView(CreateAPIView):
    queryset = SocialMediaPost.objects.all()
    serializer_class = SocialMediaPostSerializer
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        print(self.request.data)
        serializer.save()


class SocialMediaPostListCreateView(generics.ListCreateAPIView):
    queryset = SocialMediaPost.objects.all()
    serializer_class = SocialMediaPostSerializer

class SocialMediaPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SocialMediaPost.objects.all()
    serializer_class = SocialMediaPostSerializer


# Create your views here.
