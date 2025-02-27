# Generated by Django 3.2.7 on 2021-10-06 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0035_auto_20210726_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='department',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='evaluation',
            name='professor',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='integration',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
