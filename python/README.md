# Python Mail
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
## Python Debug Server
```bash
python -m smtpd -n -c DebuggingServer localhost:1025
```
