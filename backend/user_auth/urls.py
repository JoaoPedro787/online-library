from django.urls import path
from .views import auth_register, auth_login

urlpatterns = [path("register/", auth_register), path("login/", auth_login)]
