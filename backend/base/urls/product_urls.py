from django.urls import path
from ..views import product_views as views


urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('', views.getProducts, name="products"),

    path('<str:pk>', views.getProduct, name="product"),

]