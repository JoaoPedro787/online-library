from django.urls import path
from .views import UserUpdateView, UserBooksView, UserComment


urlpatterns = [
    path("<int:pk>", UserUpdateView.as_view()),
    path("book/<str:pk>/", UserBooksView.as_view()),
    path("book/", UserBooksView.as_view()),
    path("comment/", UserComment.as_view()),
    path("comment/<int:pk>", UserComment.as_view()),
]
