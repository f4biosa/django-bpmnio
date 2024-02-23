from django.urls import path
from bpmnio import views

urlpatterns = [
    path('', views.list_diagrams),
    path('new_diagram/', views.new_diagram),
    path('view_diagram/<int:pk>/', views.view_diagram),
    path('edit_diagram/<int:pk>/', views.edit_diagram),
    path('delete_diagram/<int:pk>/', views.delete_diagram),
]