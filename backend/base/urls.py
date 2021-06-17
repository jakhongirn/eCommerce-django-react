from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),

    path('users/profile/', views.getUserProfile, name="user-profile"),

    path('products/<str:pk>', views.getProduct, name="product"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
