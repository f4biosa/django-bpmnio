from django import forms
from django_bpmn.widget import BPMNWidget

from .models import BPMN


class BPMNForm(forms.Form):
    title = forms.CharField(widget=forms.TextInput())
    diagram = forms.CharField(widget=BPMNWidget)


class BPMNModelForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput())
    diagram = forms.CharField(widget=BPMNWidget)

    class Meta:
        model = BPMN
        fields = '__all__'
