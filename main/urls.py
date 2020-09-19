from django.urls import path
from main import views

urlpatterns = [
    path('languages/', views.languages, name = 'languages'),
    path('projects/', views.projects, name ='projects'),
    path('', views.index, name = 'index'),
]