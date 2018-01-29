# Installing Django
```bash
pip install django
```

# Starting Django application
```bash
django-admin startproject <project-name> [<path>]
```

# Changing settings file

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
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
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

SITE_ID = 1
```

# Setup Django E-mail sending
## Print to console
```python
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```
## Send message through SMTP
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = <custom-host>
EMAIL_PORT = <custom-port>
EMAIL_HOST_USER = <custom-user>
EMAIL_HOST_PASSWORD = <custom-password>
```
