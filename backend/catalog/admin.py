from django.contrib import admin
from .models import Book, Category, Comment

# Register your models here.
admin.site.register([Category, Book, Comment])
