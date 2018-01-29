# Default pathes

## Nginx
> /etc/nginx/sites-enabled/

## Hosts
> /etc/hosts

# Simple static serving
For showing web-site through nginx, you should to write link in hosts file and configure nginx server
## Hosts
```
127.0.0.1       <site-link>
```
## Nginx
```
server {
    listen 80;
    listen [::]:80;

    client_max_body_size 4G;
    server_name <site-link>;

    location / {
       root <path-to-site>;
    }

    location /static/$1 {
       root <path-to-site-static>/$1;
    }
}
```

# Serving dynamic content through proxy_pass
```
upstream <site-name> {
    server <ip-addr> fail_timeout=0;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
server {
    listen 80;
    listen [::]:80;

    client_max_body_size 4G;
    server_name <site-link>;

    location / {
        proxy_pass          http://<site-name>;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade $http_upgrade;
        proxy_set_header    Connection  $connection_upgrade;
    }
}
```
## Enable uwsgi
```bash
uwsgi --socket <ip-addr>:<port> --wsgi-file <path-to-wsgi-file> --master --processes 4 --threads 2 --virtualenv <path-to-virtualenv>
```
# Enable HTTPS
```
server {
    ...
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    add_header X-XSS-Protection "1; mode=block";

    include snippets/ssl-<site-link>.conf; # https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04#create-a-configuration-snippet-with-strong-encryption-settings#create-a-configuration-snippet-pointing-to-the-ssl-key-and-certificate
    include snippets/ssl-params.conf; # https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04#create-a-configuration-snippet-with-strong-encryption-settings

    if ($scheme != "https") {
        return 301 https://$server_name$request_uri;
    }
    ...
}
```

# Enable Gzip Compression
```
server {
    ...
    gzip on;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/javascript text/xml application/xml+rss;
    ...
}
```

# Creating aliases
```
server {
    ...
    location ~ ^/favicon.ico$ {
        alias <path-to-favicon>;
    }
    ...
}
```

# Configure error pages
```
server {
    ...
    error_page 404 /404.html;
    error_page 500 502 503 504 /500.html;

    location = /(404|500).html {
        root <path-to-template-folder>;
        internal;
    }
    ...
}
```

# Enable WebSockets
```
server {
    ...
    location /<websocket-path>/ {
        proxy_pass          http://<site-name>;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade     $http_upgrade;
        proxy_set_header    Connection  $connection_upgrade;
    }
    ...
}
```
