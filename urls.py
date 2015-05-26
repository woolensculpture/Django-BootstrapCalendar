from django.conf.urls import patterns, url
from django.contrib import admin

from views import CalendarView, ModalCalendarView, EventView

admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^calendar(\?from=<start>&to=<end>)?', CalendarView.as_view(), name='Calendar'),
    url(r'^modal_calendar(\?from=<start>&to=<end>)?', ModalCalendarView.as_view(), name='Modal_Calendar'),
    url(r'^Event(?P<event_id>\d+)?', EventView.as_view(), name='Event'),
)
