from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.generic import View
from models import Event
from datetime import datetime

class CalendarView(View):
    ''' the view of the calendar
    '''
    def dispatch(self, request, *args, **kargs):
        if request.method == 'GET' and request.is_ajax():
            start = request.GET.get('from')
            start = int(start) // 1000
            end = request.GET.get('to')
            end = int(end) // 1000
            eventlist = self.create_event_list(start, end)
            eventlist = self.json_encode_list(eventlist)
            return HttpResponse(json.dumps(eventlist), content_type="application/json")
        else:
            return render(self.request, 'base.html', {'view': 'month'})

    def create_event_list(self, start, end):
        datetime.fromtimestamp(start,tz=django.)
        datetime.fromtimestamp(end,tz=)
        eventslist = Event.objects.filter()
        return eventslist

    def json_encode_list(self, eventlist):
        ''' encodes the event list into a string formatted to be a JSON list of the events
            :return - a string in JSON format of the list.
        '''
        jsonlist = []
        if eventlist:
            for event in eventlist:
                jsonevent = {}
                start, end = event.convert_to_timestamp()
                jsonevent['id'] = event.id
                jsonevent['title'] = event.title
                jsonevent['url'] =
                jsonevent['class'] = event.type
                jsonevent['start'] = int(start*1000)
                jsonevent['end'] = int(end*1000)
                jsonlist.append(jsonevent)
        return {"result": jsonlist, "success": "1"}


