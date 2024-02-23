from django.contrib import admin

from .models import BPMN
from .forms import BPMNModelForm


class BPMNAdmin(admin.ModelAdmin):
    form = BPMNModelForm


admin.site.register(BPMN, BPMNAdmin)
