from django.db import models


class BPMN(models.Model):
    title = models.CharField(max_length=255)
    diagram = models.TextField('Diagram')

    def __repr__(self):
        return f'BPMN [{self.title}]'

    def __str__(self):
        return f'BPMN [{self.title}]'