# Generated by Django 5.0.7 on 2024-07-24 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tables',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('col1', models.CharField(max_length=100)),
                ('col2', models.CharField(max_length=100)),
                ('col3', models.CharField(max_length=100)),
                ('col4', models.CharField(max_length=100)),
                ('col5', models.CharField(max_length=100)),
            ],
        ),
    ]
