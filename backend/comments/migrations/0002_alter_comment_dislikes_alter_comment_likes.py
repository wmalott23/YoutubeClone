# Generated by Django 4.0.4 on 2022-04-29 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='dislikes',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.IntegerField(null=True),
        ),
    ]
