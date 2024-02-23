# dashboard/urls.py
from django.urls import path
from .views import DashboardStatisticsView, SocialMediaPostListCreateView, SocialMediaPostDetailView, SocialMediaPostWithLikesCommentsCreateView

urlpatterns = [
    path('posts/', SocialMediaPostListCreateView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', SocialMediaPostDetailView.as_view(), name='post-detail'),
    path('dashboard/', DashboardStatisticsView.as_view(), name='dashboard-statistics'),
    path('posts/with-likes-comments/', SocialMediaPostWithLikesCommentsCreateView.as_view(), name='post-with-likes-comments-create'),
]
