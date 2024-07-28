from rest_framework import serializers
from tables.models import Record

class tableSerializer(serializers.ModelSerializer):
 class Meta:
    model = Record
    fields = '__all__'