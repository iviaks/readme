# Simple config with uswgi
```
server {
    listen 80;
    listen [::]:80;
    location / {
        include     uwsgi_params;
        uwsgi_pass  127.0.0.1:8000;
    }
}
```
## Start uwsgi
```bash
uwsgi --socket 127.0.0.1:8000 --wsgi-file <path_to_file_wsgi.py> --master --processes 4 --threads 2 --virtualenv <path_to_virtualenv>
```
