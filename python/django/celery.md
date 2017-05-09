# How to setting celery with django?
## Installing
```bash
pip install -U Celery
```

## project/settings.py
```python
BROKER_URL = 'redis://{REDIS_HOST}:6379'.format(
    REDIS_HOST=os.environ.get('REDIS_HOST', 'localhost')
)
CELERY_RESULT_BACKEND = 'redis://{REDIS_HOST}:6379'.format(
    REDIS_HOST=os.environ.get('REDIS_HOST', 'localhost')
)
```


## project/celery.py
```python
from __future__ import absolute_import

import os

from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
app = Celery('project')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
```

## project/__init__.py
```python
from __future__ import absolute_import

from .celery import app as celery_app  # noqa
```

## application/tasks.py
### Simple task
```python
@shared_task
def function_name(params):
    # Do something
```

### Periodic task
```python
@periodic_task(
    run_every=(crontab(minute=0, hour=0)),
)
def function_name():
    # Do something
```
[More about crontab](http://docs.celeryproject.org/en/latest/userguide/periodic-tasks.html#crontab-schedules)
