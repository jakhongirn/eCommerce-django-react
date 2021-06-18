from django.urls import path
from ..views import user_views as views


urlpatterns = [
    # path('', views.getRoutes, name="routes"),

    path('register/', views.registerUser, name="register"),
    path('profile/', views.getUserProfile, name="user-profile"),

    path('profile/update', views.updateUserProfile, name="user-profile-update"),

    path('users/', views.getUsers, name="users"),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
