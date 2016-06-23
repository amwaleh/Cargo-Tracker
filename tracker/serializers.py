from django.contrib.auth.models import User, Group
from tracker.models import Customers, Cargo, CargoState
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    '''
    Handles Login and user account creation
    '''
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class CustomerSerializer(serializers.ModelSerializer):
    '''
        Handles Customer transaction
    '''
    class Meta:
        model = Customers

class CargoStateSerializer(serializers.HyperlinkedModelSerializer):
    '''
        Handles cargo transition from one location to the next
    '''

    class Meta:
        model = CargoState

class CargoSerializer(serializers.ModelSerializer):
    '''
        Handles Cargo transactions
    '''
    state = CargoStateSerializer(many=True, read_only=True)
    class Meta:
        model = Cargo



class CustomerTransactionsSerializer(serializers.ModelSerializer):
    '''
        Handles all transactions of a Client
    '''
    cargo =  CargoSerializer(many=True, read_only=True)
    class Meta:
        model = Customers



