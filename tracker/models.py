from django.db import models
import uuid
# Create your models here.
class Customers(models.Model):
    '''
        saves detail for both the sender and recipient
    '''
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    organisation = models.CharField(max_length=255)
    tel = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, unique=True)


    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)


class Cargo (models.Model):
    '''
        Stores information on all cargo/ parcels
        we are using UUID to create unique numbers
    '''

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sender = models.ForeignKey(Customers, related_name="cargo")
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    tel = models.CharField(max_length=30)
    source = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    Destination = models.CharField(max_length=30)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)


    class Meta:
        # Edit to get the most recent cargo to be sent
        get_latest_by ="modified_at"

    def __str__(self):
        # returns the UUID
        return "{}".format(self.pk)

class CargoState(models.Model):
    '''
        Stores the changing state of the cargo from one station to another
        Transit: when the cargo leaves a station
        Border: when a cargo is at border point or customs
        Damaged : if the parcel has been damaged or lost
        Impounded : When Cargo has been impounded by customs or needs clearance
        Delivered : when Cargo has been delivered
    '''

    STATE_CHOICES = (

        ('Transit', 'Transit'),
        ('Border','Border'),
        ('Damaged','Damaged'),
        ('Impounded', 'impounded'),
        ('Delivered', 'delivered')
    )
    cargo = models.ForeignKey('Cargo', related_name='state')
    state = models.CharField(max_length=30, choices=STATE_CHOICES)
    Last_location = models.CharField(max_length=30)
    next_station = models.CharField(max_length=30)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)
