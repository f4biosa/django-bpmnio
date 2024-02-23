from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from .forms import BPMNForm


def bpmn_editor(request):
    return render(request, 'bpmn_editor.html')


def upload_file(request):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        fs.save(settings.MEDIA_ROOT + '/bpmn_files/' + myfile.name, myfile)
        return render(request, 'upload_success.html', {'uploaded_file': myfile})
    return render(request, 'upload.html')


from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404

from .forms import BPMNForm, BPMNModelForm
from .models import BPMN


def list_diagrams(request):
    diagrams = BPMN.objects.all()
    return render(request, template_name='diagrams.html', context={'diagrams': diagrams})


def view_diagram(request, pk):
    bpmn = get_object_or_404(BPMN, pk=pk)
    form = BPMNModelForm(instance=bpmn)
    return render(request, template_name='diagram.html', context={'form': form, 'only_view': True})


def new_diagram(request):
    if request.method == 'POST':
        form = BPMNForm(request.POST)
        if form.is_valid():
            diagram = form.cleaned_data.get('diagram')
            BPMN.objects.create(diagram=diagram)
            messages.success(request, 'Diagram successfully created')
    else:
        form = BPMNForm()
    return render(request, template_name='diagram.html', context={'form': form})


def edit_diagram(request, pk):
    bpmn = get_object_or_404(BPMN, pk=pk)
    if request.method == 'POST':
        form = BPMNModelForm(request.POST, instance=bpmn)
        if form.is_valid():
            form.instance.save()
            messages.success(request, 'Diagram successfully created')
    else:
        form = BPMNModelForm(instance=bpmn)
    return render(request, template_name='diagram.html', context={'form': form})


def delete_diagram(request, pk):
    bpmn = get_object_or_404(BPMN, pk=pk)
    if bpmn.delete():
        return HttpResponseRedirect('/sample/')
    else:
        return HttpResponseRedirect('.')