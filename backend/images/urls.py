from images import views
from django.urls import include, path

urlpatterns = [
    path('images/',views.index),
]
