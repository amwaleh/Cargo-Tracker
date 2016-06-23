from django.conf.urls import url, include
from rest_framework import routers
from tracker import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewset)
router.register(r'customer', views.CustomerViewset, base_name="customers")
router.register(r'cargo', views.CargoViewset)
router.register(r'transactions', views.CustomerTransactionsViewset, base_name="transactions")
router.register(r'state', views.CargoStateViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^index',views.start)
]