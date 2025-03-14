from django.contrib.auth.models import User
from django.db import models


# Many to many
class UserFavoritesBook(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey("catalog.Book", on_delete=models.CASCADE)
