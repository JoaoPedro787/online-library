from rest_framework import serializers
from .models import Book, Category, Comment
from django.core import signing


class CommentSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"
        extra_kwargs = {"book": {"write_only": True}, "user": {"write_only": True}}


class BookSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source="user.username", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)
    signed_id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Book
        fields = [
            "signed_id",
            "user_name",
            "category_name",
            "name",
            "user",
            "category",
            "description",
            "image",
            "author",
        ]
        extra_kwargs = {
            "user": {"write_only": True},
            "category": {"write_only": True},
        }

    def get_signed_id(self, obj):
        return signing.dumps(obj.id)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]
