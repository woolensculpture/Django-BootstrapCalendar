import json
from datetime import datetime

from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView

from models import Event


class CalendarView(View):
    """ the view of the calendar
    """
    def dispatch(self, request, *args, **kargs):
        if request.method == 'GET' and request.is_ajax():
            start = request.GET.get('from')
            start = int(start) // 1000
            end = request.GET.get('to')
            end = int(end) // 1000
            eventlist = self.create_event_list(start, end)
            eventlist = json_encode_list(eventlist)
            return HttpResponse(json.dumps(eventlist), content_type="application/json")
        else:
            return render(self.request, 'calendar/base.html')

    def create_event_list(self, start, end):
        start = datetime.fromtimestamp(start)
        end = datetime.fromtimestamp(end)
        eventslist = Event.objects.filter(start_date__range=(start, end))
        return list(eventslist)


def json_encode_list(eventlist):
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
            jsonevent['url'] = "/Event/" + str(event.id)
            jsonevent['class'] = event.type
            jsonevent['start'] = int(start * 1000)
            jsonevent['end'] = int(end * 1000)
            jsonlist.append(jsonevent)
    return {"result": jsonlist, "success": "1"}


class ModalCalendarView(TemplateView, CalendarView):
    """  A view enabling the modal Event drop.
    """
    template_name = "calendar/modal popup.html"

    def dispatch(self, request, *args, **kwargs):
        return super(ModalCalendarView, self).dispatch()


class EventView(View):
    """ A generic event view for both modal and regular calendar. Modify to fit your needs.
    """

    def dispatch(self, request, *args, **kwargs):
        if request.method == 'GET':
            event_id = request.GET.get('event_id')
            event = Event.objects.get(id=event_id)
            return render('event.html', {"event": event,
                                         "event_start": event.start_datetime.strftime("%x %X"),
                                         "event_end": event.end_datetime.strftime("%x %X")
                                         })
        else:
            return render('event.html', {"event": 'something went wrong',
                                         "event_start": 'something went wrong',
                                         "event_end": 'something went wrong'
                                         })
