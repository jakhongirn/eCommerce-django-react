from django.urls import path
from ..views import product_views as views


urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),

    path('products/<str:pk>', views.getProduct, name="product"),

]
