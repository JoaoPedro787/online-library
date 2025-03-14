from django.urls import path
from .views import BooksViewRetrieve, BooksViewList, Category

urlpatterns = [
    path("", BooksViewList.as_view()),
    path("<str:pk>", BooksViewRetrieve.as_view()),
    path("category/", Category.as_view()),
]
