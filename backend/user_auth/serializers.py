from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    access = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        if not attrs.get("access") or not attrs.get("password"):
            raise serializers.ValidationError("Empty fields!")
        return attrs
