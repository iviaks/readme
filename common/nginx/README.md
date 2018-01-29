# Nginx

Nginx is a web server which can also be used as a reverse proxy, load balancer and HTTP cache. The software was created by Igor Sysoev and first publicly released in 2004. A company of the same name was founded in 2011 to provide support.

Nginx is free and open source software, released under the terms of a BSD-like license. A large fraction of web servers use NGINX, often as a load balancer.

## Default pathes

### Ubuntu

> /etc/nginx/sites-enabled/

### CentOS

> /etc/nginx/conf.d/

## Simple static serving

For serving static files, you should add next line to your hosts:

```
127.0.0.1       <site-link>
```

After, you should create nginx config with next content:

```nginx
server {
    listen 80;
    listen [::]:80;

    client_max_body_size 4G;
    server_name <site-link>;

    root <path-to-site>;
    index index.html;
}
```

## Serving via ProxyPass

```
upstream <upstream-name> {
    server <ip-addr> fail_timeout=0;
}

server {
    listen 80;
    listen [::]:80;

    client_max_body_size 4G;
    server_name <site-link>;

    location / {
        proxy_pass          http://<upstream-name>;
        proxy_http_version  1.1;
    }
}
```

## Enable HTTPS (with HTTP/2)

```
server {
    ...
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate     certificate.crt;
    ssl_certificate_key certificate.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ...
}
```

## Enable Gzip Compression

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

## Creating aliases

```
server {
    ...
    location ~ ^/favicon.ico$ {
        alias <path-to-favicon>;
    }
    ...
}
```

## Configure error pages

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

## Enable WebSockets

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
