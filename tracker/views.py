from django.shortcuts import render
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import viewsets
from tracker.models import Customers, Cargo, CargoState
from tracker.serializers import UserSerializer, CustomerSerializer, CargoSerializer, CargoStateSerializer, \
    CustomerTransactionsSerializer


# Create your views here.


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class CustomerViewset(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomerSerializer


class CargoViewset(viewsets.ModelViewSet):
    queryset = Cargo.objects.all()
    serializer_class = CargoSerializer


class CargoStateViewset(viewsets.ModelViewSet):
    queryset = CargoState.objects.all()
    serializer_class = CargoStateSerializer


class CustomerTransactionsViewset(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomerTransactionsSerializer


def start(request):
    return render(request, "partials/index.html", {'STATIC_URL': settings.STATIC_URL})
