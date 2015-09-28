import json
from datetime import datetime
from django.shortcuts import render
from django.http import JsonResponse
from django.core.urlresolvers import reverse
from django.views.generic import View
from BootstrapCalendar.models import Event
from BootstrapCalendar.forms import EventForm


class CalendarView(View):
    """ the view of the calendar, all times are in the server's timezone
    """
    # TODO Check localization for language is working properly,
    # TODO make sure dates do not go one day past their period
    def dispatch(self, request, *args, **kargs):
        if request.method == 'GET' and request.is_ajax():
            start = self.request.GET.get('from')
            start = int(start) // 1000
            end = request.GET.get('to')
            end = int(end) // 1000
            eventlist = create_event_list(start, end)
            eventlist = self.json_encode_list(eventlist)
            return JsonResponse(eventlist)
        else:
            return render(self.request, 'calendar/base.html', {
                'modal': True,
                'form': EventForm(),
            })

    def json_encode_list(self, eventlist):
        """ encodes the event list into a string formatted to be a JSON list of the events
           :return - a string in JSON format of the list.
        """
        jsonlist = []
        if eventlist:
            for event in eventlist:
                jsonevent = {}
                start, end = event.convert_to_timestamp()
                jsonevent['id'] = event.id
                jsonevent['title'] = event.title
                jsonevent['url'] = reverse('Event',
                                           current_app=self.request.resolver_match.namespace,
                                           args=[event.id])
                jsonevent['class'] = event.type
                jsonevent['start'] = int(start * 1000)
                jsonevent['end'] = int(end * 1000)
                jsonlist.append(jsonevent)
        return {"result": jsonlist, "success": "1"}


def create_event_list(start, end):
    """ gets all events that occur or are occurring during the range passed
    :param start: The start of the time period being selected for
    :param end: The end of the time period being selected for
    :return: a list of Event model objects that occur during that time period
    """
    start = datetime.fromtimestamp(start)
    end = datetime.fromtimestamp(end)
    eventslist = Event.objects.filter(end_datetime__gte=start, start_datetime__lte=end)
    return list(eventslist)


class EventView(View):
    """ A generic event view for both modal and regular calendar. Modify to fit your needs.
    """
    def dispatch(self, request, *args, **kwargs):
        event_id = kwargs['event_id']
        event = Event.objects.get(id=event_id)
        if request.is_ajax() and request.method == "GET":
            # if you want the modal event page to be different than the event page, put logic here for it.
            return render(request, 'calendar/modal_popup.html', {'Event': event})
        return render(request, 'calendar/event.html', {'Event': event})

class CreateEvent(View):
    def dispatch(self, request, *args, **kwargs):
        if self.request.method == 'POST' and self.request.is_ajax():
            new_event = EventForm(request.POST)
            if new_event.is_valid():
                new_event.save()
                return JsonResponse({'successful': True})
            return JsonResponse(new_event.errors)
        return JsonResponse({})
