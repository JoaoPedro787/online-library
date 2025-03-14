from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return f"ID: {self.id} | Category: {self.name}"


class Book(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=False)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)
    author = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return f"ID: {self.id} | Category: {self.category.name} | Book: {self.name} | User: {self.user.username}"


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="comments")
    user_comment = models.TextField()

    def __str__(self):
        return f"ID: {self.id} | User: {self.user.username} | Book: {self.book.name}"
