import django_filters
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import viewsets
from tracker.models import Customers, Cargo, CargoState
from tracker.serializers import UserSerializer, CustomerSerializer, CargoSerializer, CargoStateSerializer, \
    CustomerTransactionsSerializer
from rest_framework import filters
from rest_framework import generics

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
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('id', 'first_name', 'sender__first_name', 'sender__tel', 'tel',
                     'Destination', 'source')
    # permission_classes = (IsAuthenticated,)


class CargoStateViewset(viewsets.ModelViewSet):
    queryset = CargoState.objects.all()
    serializer_class = CargoStateSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticated,)


class CustomerTransactionsViewset(viewsets.ModelViewSet):
    '''
    shows all available transaction/ cargo in the system
    '''
    queryset = Customers.objects.all()
    serializer_class = CustomerTransactionsSerializer


def start(request):
    # landing page
    return render(request, "partials/index.html", {'STATIC_URL': settings.STATIC_URL})
