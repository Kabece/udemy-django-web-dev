from django.conf.urls import url
from AppTwo import views

urlpatterns = [
    url('^$', views.index, name = 'index')
]
