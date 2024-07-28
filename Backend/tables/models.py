from django.db import models

# Create your models here.

class Record(models.Model):
    col1 = models.CharField(max_length = 100)
    col2 = models.CharField(max_length = 100)
    col3 = models.CharField(max_length = 100)
    col4 = models.CharField(max_length = 100)
    col5 = models.CharField(max_length = 100)
    
