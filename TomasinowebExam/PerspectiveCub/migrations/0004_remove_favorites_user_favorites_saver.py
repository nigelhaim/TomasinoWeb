# Generated by Django 4.2.3 on 2023-07-20 08:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('PerspectiveCub', '0003_favorites'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favorites',
            name='user',
        ),
        migrations.AddField(
            model_name='favorites',
            name='saver',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='saver', to='PerspectiveCub.profile'),
        ),
    ]
