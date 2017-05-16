# Start Django Application
## Installing Django
```bash
pip install django
```

## Starting Django application
```bash
django-admin startproject <project-name> [<path>]
```

## Changing settings file

### Set static path
```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    ('css', os.path.join(BASE_DIR, 'static', 'css')),
    ('img', os.path.join(BASE_DIR, 'static', 'img')),
    ('bundles', os.path.join(BASE_DIR, 'static', 'bundles')),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'collectedstatic')
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)
```
### Set media path
```python
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```
### Set template path
```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates')
        ],
        # 'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # 'django.core.context_processors.request',
            ],

            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ],

        },
    },
]

```
### Set SITE_ID
```python
SITE_ID = 1
```
### Set database
#### PostgreSQL
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': <db-name>,
        'USER': <db-user>,
        'PASSWORD': <db-pass>,
        'HOST': <db-host>, # Default: localhost
        'PORT': <db-port> # Default: 5432
    }
}

```
