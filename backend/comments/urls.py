from django.urls import path
from comments import views


urlpatterns = [
    path('<string:pk>/', views.get_all_comments),
    path('', views.post_comment),
    path('<int:pk>/update/', views.update_comment),
]