from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("logout", views.logout_view, name="logout"),
    path("login", views.login_view, name="login"),
    path("signup", views.signup_view, name="signup"),
    path("post", views.c_post, name="post"),
]
