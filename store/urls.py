
from django.urls import path 
from . import views
from django.urls import re_path

urlpatterns = [
    path('', views.all_prods , name='all-prods'),
    path('order/', views.get_order),
    path('order-items/', views.get_items),
    path('add-to-card/',views.add_to_card)
    
]    




