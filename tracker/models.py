from django.db import models
import uuid
# Create your models here.
class Customers(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    organisation = models.CharField(max_length=255)
    tel = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, unique=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)


class Cargo (models.Model):

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
        get_latest_by ="modified_at"

    def __str__(self):
        return "{}".format(self.pk)

class CargoState(models.Model):

    STATE_CHOICES = (
        ('Transit', 'Transit'),
        ('Border','Border'),
        ('Damaged','Damaged'),
        ('Impounded', 'impounded'),
        ('Delivered', 'delivered')
    )
    cargo = models.ForeignKey('Cargo', related_name='state')
    state = models.CharField(max_length=30, choices=STATE_CHOICES)
    Last_location =models.CharField(max_length=30)
    next_station = models.CharField(max_length=30)
    created_at = models.DateField(auto_now_add=True)
    modified_at = models.DateField(auto_now=True)
