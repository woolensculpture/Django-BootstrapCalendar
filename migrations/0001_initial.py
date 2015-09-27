# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.TextField()),
                ('start_datetime', models.DateTimeField()),
                ('end_datetime', models.DateTimeField()),
                ('type', models.CharField(default='event-info', max_length=15, choices=[('event-info', 'blue'), ('event-warning', 'yellow'), ('event-success', 'green'), ('event-inverse', 'black'), ('event-special', 'purple'), ('event-important', 'red'), ('', 'gray')])),
            ],
        ),
    ]
