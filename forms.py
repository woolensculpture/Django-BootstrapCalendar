from django import forms
from BootstrapCalendar.models import Event

class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = '__all__'
        widgets = {
            'title': forms.TextInput(attrs={'id': 'create-title',
                                            'class': 'form-control'}),
            'type': forms.Select(attrs={'id': 'create-type',
                                        'class': 'form-control'}),
            'start_datetime': forms.DateTimeInput(attrs={'id': 'create-start_datetime',
                                                         'class': 'form-control',
                                                         'placeholder': 'YYYY-MM-DD HH:MM'}),
            'end_datetime': forms.DateTimeInput(attrs={'id': 'create-end_datetime',
                                                       'class': 'form-control',
                                                       'placeholder': 'YYYY-MM-DD HH:MM'}),
        }

    def clean(self):
        cleaned_data = super(EventForm, self).clean()
        start_datetime = cleaned_data.get('start_datetime')
        end_datetime = cleaned_data.get('end_datetime')
        if start_datetime and end_datetime:
            if start_datetime > end_datetime:
                raise self.add_error('start_datetime', 'the start time must come after the end time')
