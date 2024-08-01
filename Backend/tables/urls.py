from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import tableViewSet

router = DefaultRouter()
router.register(r'tables', tableViewSet)

urlpatterns = [
    path('', include(router.urls)),
]



