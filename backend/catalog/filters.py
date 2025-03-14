import django_filters as filters
from .models import Book, Comment


# Apenas um protótipo. Melhorar filtros
class BookFilter(filters.FilterSet):
    category = filters.CharFilter(field_name="category__name", lookup_expr="iexact")

    class Meta:
        model = Book
        fields = ["category"]
