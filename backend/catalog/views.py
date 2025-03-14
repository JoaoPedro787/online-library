from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book, Category, Comment
from .serializers import BookSerializer, CategorySerializer, CommentSerializer
from .filters import BookFilter
from django.core import signing
from rest_framework.exceptions import NotFound


# Personalizar melhor os filtros
class BooksViewList(ListAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.select_related("user", "category")
    filterset_class = BookFilter
    search_fields = ["category__name", "author", "name"]


class BooksViewRetrieve(APIView):
    def get(self, req, pk):
        try:
            book = Book.objects.select_related("user", "category").get(
                pk=signing.loads(pk)
            )
            comments = book.comments.all()
            bookSerializer = BookSerializer(book)
            commentsSerializer = CommentSerializer(comments, many=True)

            return Response(
                {"book": bookSerializer.data, "comments": commentsSerializer.data}
            )
        except (signing.BadSignature, Book.DoesNotExist):
            raise NotFound("Book matching query does not exist.")


class Category(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class Comment(ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment
