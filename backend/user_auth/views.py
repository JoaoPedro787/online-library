from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.decorators import (
    api_view,
    permission_classes,
    authentication_classes,
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
    HTTP_409_CONFLICT,
)

from user.serializers import UserSerializer
from .serializers import LoginSerializer


# Register
@api_view(["POST"])
@permission_classes([AllowAny])
@authentication_classes([])
def auth_register(req):
    serializer = UserSerializer(data=req.data)
    if serializer.is_valid():
        # Creating hashed password!
        serializer.validated_data["password"] = make_password(
            serializer.validated_data["password"]
        )
        serializer.save()
        return Response(
            {"details": "User sucessful created! You may get logged now!"},
            HTTP_201_CREATED,
        )

    elif (
        "username" in serializer.errors
        and serializer.errors["username"][0].code == "unique"
    ):
        return Response(
            {"details": "User with this username already exists!"}, HTTP_409_CONFLICT
        )

    elif (
        "email" in serializer.errors and serializer.errors["email"][0].code == "unique"
    ):
        return Response(
            {"details": "User with this email already exists!"}, HTTP_409_CONFLICT
        )

    return Response(serializer.errors, HTTP_400_BAD_REQUEST)


# Login
@api_view(["POST"])
@permission_classes([AllowAny])
@authentication_classes([])
def auth_login(req):
    serializer = LoginSerializer(data=req.data)

    if serializer.is_valid():
        try:
            user = User.objects.get(
                Q(username=serializer.validated_data["access"])
                | Q(email=serializer.validated_data["access"])
            )

            if user.check_password(req.data["password"]):
                refresh = RefreshToken.for_user(user)

                return Response(
                    {
                        "access": str(refresh.access_token),
                        "details": "Sucessfully logged!",
                    }
                )

            return Response({"details": "Values not matched!"}, HTTP_403_FORBIDDEN)

        except User.DoesNotExist:
            return Response({"details": "User not found!"}, HTTP_404_NOT_FOUND)

    return Response(serializer.errors, HTTP_400_BAD_REQUEST)
