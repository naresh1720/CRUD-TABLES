from django.shortcuts import render
from rest_framework import viewsets
from tables.models import Record
from .serializers import tableSerializer
# from django.http import HttpResponse

class tableViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = tableSerializer
