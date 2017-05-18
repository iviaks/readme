# Nginx config with SSL and upstream
```
upstream <server-name> {
    server <server-host>:<server-port> fail_timeout=0;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    client_max_body_size    4G;
    server_name             _;

    add_header X-XSS-Protection "1; mode=block";

    include snippets/ssl-<server-name>.conf;
    include snippets/ssl-params.conf;

    gzip            on;
    gzip_disable    "msie6";

    gzip_vary           on;
    gzip_proxied        any;
    gzip_comp_level     6;
    gzip_buffers        16 8k;
    gzip_http_version   1.1;
    gzip_types          text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        proxy_pass          http://<server-name>;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade $http_upgrade;
        proxy_set_header    Connection  $connection_upgrade;
    }

    location ~ ^/favicon.ico$ {
        alias       <path-to-favicon>;
    }

    location ~ ^/static/(.*)$ {
        root        /;
        try_files   <path-to-static>/$1 =404;
        expires     7d;
        add_header  Pragma public;
        add_header  Cache-Control public;
    }

    location ~ ^/media/(.*)$ {
        root        /;
        try_files   <path-to-media>/$1 =404;
        expires     7d;
        add_header  Pragma public;
        add_header  Cache-Control public;
    }

    location /chat/ {
        proxy_pass          http://<server-name>;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade     $http_upgrade;
        proxy_set_header    Connection  $connection_upgrade;
    }

    location /notifications/ {
        proxy_pass          http://<server-name>;
        proxy_http_version  1.1;
        proxy_set_header    Upgrade     $http_upgrade;
        proxy_set_header    Connection  $connection_upgrade;
    }

}

```
