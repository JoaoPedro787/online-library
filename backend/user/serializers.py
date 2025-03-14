from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password", "email"]
        extra_kwargs={"password":{"write_only":True}}

    def validate_username(self, value):
        if len(value) < 8:
            raise serializers.ValidationError(
                "Username must be greater than 8 characters"
            )

        return value

    def validate_email(self, value):
        if value == "":
            raise serializers.ValidationError("This field may not be blank.")
        return value

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError(
                "Password must be greater than 8 characters"
            )

        return value
