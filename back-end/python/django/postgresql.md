# How to setting PostgreSQL
## Install

```bash
pip install psycopg2
```

## project/settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '<db name>',
        'USER': '<db user>',
        'PASSWORD': '<db pass>',
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': 5432,
    }
}
```
