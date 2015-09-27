from django.conf.urls import patterns, url
from django.contrib import admin

from BootstrapCalendar.views import CalendarView, EventView, CreateEvent

admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^CreateEvent', CreateEvent.as_view(), name='CreateEvent'),
    url(r'^(\?from=<start>&to=<end>)?', CalendarView.as_view(), name='Calendar'),
    url(r'^Event/(?P<event_id>\d+)?', EventView.as_view(), name='Event'),
)
