# Generated by Django 2.2.13 on 2021-01-10 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210107_1649'),
    ]

    operations = [
        migrations.AddField(
            model_name='pen',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
