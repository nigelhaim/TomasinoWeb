from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("logout", views.logout_view, name="logout"),
    path("login", views.login_view, name="login"),
    path("signup", views.signup_view, name="signup"),
    path("post", views.c_post, name="post"),
    path("get_posts", views.get_posts, name="get_posts"),
    path("<int:post_id>", views.view_post, name="view_post"),
    path("edit_post/<int:post_id>", views.edit_post, name="edit_post"),
    path("delete/<int:post_id>", views.delete, name="delete"),
    path("favorites/<int:post_id>", views.add_favorites, name="favorites"),
    path("show_favorites", views.show_favorites, name="show_favorites"),
]
