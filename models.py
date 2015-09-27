from django.db import models
from time import mktime

class Event(models.Model):
    """ A default event model that can be extended within your own models
    """

    title = models.TextField()
    # TODO: make datetime objects are not naive
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()

    BLUE = 'event-info'
    YELLOW = 'event-warning'
    GREEN = 'event-success'
    BLACK = 'event-inverse'
    PURPLE = 'event-special'
    RED = 'event-important'
    GRAY = ''
    TYPE = (
        (BLUE, 'blue'),
        (YELLOW, 'yellow'),
        (GREEN, 'green'),
        (BLACK, 'black'),
        (PURPLE, 'purple'),
        (RED, 'red'),
        (GRAY, 'gray'),
    )
    type = models.CharField(max_length=15, choices=TYPE, default=BLUE)

    def convert_to_timestamp(self):
        """ converts the start and end of the event into a unix time stamp, which is a count of every millisecond from
        1/1/1970 at midnight UTC until now. If not converted to 64-bit integer it will break in 2038.
        :return: a tuple of the unix timestamps of the start and the end of the event
        """
        start = mktime(self.start_datetime.timetuple())
        end = mktime(self.end_datetime.timetuple())
        return start, end

    def conflicts(self, event):
        """ tests if the event overlaps with another given by the event parameter
        :param: event: the event to be testing to see if it overlaps
        :return: true if no conflicts, false if otherwise
        """
        if (event.start_datetime < self.start_datetime < event.end_datetime
            or event.start_datetime < self.end_datetime < event.end_datetime
                or self.start_datetime < event.end_datetime and self.end_datetime < event.end_datetime):
            return False
        return True

    def is_within(self, event):
        """ Tests if this event is within another
        :param event: the event that is being tested against
        :return: True if the parameter event is within this instance, False if otherwise
        """
        if (event.start_datetime < self.start_datetime < event.end_datetime
                and event.start_datetime < self.end_datetime < event.end_datetime):
            return True
        return False

    def __str__(self):
        return self.title
