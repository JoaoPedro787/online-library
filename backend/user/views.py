from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.core import signing
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED
from rest_framework_simplejwt.tokens import UntypedToken
from .serializers import UserSerializer
from catalog.serializers import BookSerializer, CommentSerializer
from catalog.models import Book, Comment


# Create your views here.
class UserUpdateView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserBooksView(APIView):
    def post(self, req, pk=None):
        token = req.headers["Authorization"].split()[1]
        user_id = UntypedToken(token).payload["user_id"]
        req.data["user"] = user_id

        serializer = BookSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"details": "Book sucessful created!"})
        return Response(serializer.errors, HTTP_400_BAD_REQUEST)

    def get(self, req, pk=None):
        token = req.headers["Authorization"].split()[1]
        user_id = UntypedToken(token).payload["user_id"]

        user = User.objects.get(pk=user_id)

        book = Book.objects.select_related("user", "category").filter(user=user_id)

        bookSerializer = BookSerializer(book, many=True)

        userSerializer = UserSerializer(user)

        return Response({"books": bookSerializer.data, "user": userSerializer.data})

    def patch(self, req, pk):
        book = get_object_or_404(Book, pk=signing.loads(pk))
        serializer = BookSerializer(book, data=req.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"details": "Book updated!"})
        return Response(serializer.errors, HTTP_400_BAD_REQUEST)

    def delete(self, req, pk):
        book = get_object_or_404(Book, pk=signing.loads(pk))
        book.delete()
        return Response({"details": "Book deleted!"})


class UserComment(APIView):
    def post(self, req, pk=None):
        req.data["book"] = signing.loads(req.data["book"])
        req.data["user"] = req.user.id

       
        serializer = CommentSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"details": "Comment posted!"})
        return Response(serializer.errors, HTTP_400_BAD_REQUEST)

    def patch(self, req, pk):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=req.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"details": "Comment edited!"})
        return Response(serializer.errors, HTTP_400_BAD_REQUEST)

    def delete(self, req, pk):
        comment = get_object_or_404(Comment, pk=pk)
        comment.delete()
        return Response({"details": "Comment deleted!"})
