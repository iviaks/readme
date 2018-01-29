# PostgreSQL

PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance. As a database server, its primary functions are to store data securely and return that data in response to requests from other software applications. It can handle workloads ranging from small single-machine applications to large Internet-facing applications (or for data warehousing) with many concurrent users; on macOS Server, PostgreSQL is the default database; and it is also available for Microsoft Windows and Linux (supplied in most distributions).

PostgreSQL is ACID-compliant and transactional. PostgreSQL has updatable views and materialized views, triggers, foreign keys; supports functions and stored procedures, and other expandability.

PostgreSQL is developed by the PostgreSQL Global Development Group, a diverse group of many companies and individual contributors.[14] It is free and open-source, released under the terms of the PostgreSQL License, a permissive software license.

## How to install?

For install latest postgresql server, you should execute next command:

```bash
sudo apt-get install postgresql libpq-dev python-dev python3-dev build-essential postgresql-server-dev-all
```

You can test connection to database with next command:

```bash
sudo -u postgres psql
```

## Base commands

You can make commands via SQL or command line:

### SQL

```sql
CREATE DATABASE <name>;
CREATE USER <login> WITH password '<password>';
GRANT ALL privileges ON DATABASE <name> TO <login>;
```

### Command line

```bash
createdb <name>;
dropdb <name>;
createuser -s <name>;
```

## Docker

You can download docker image from [Docker hub](https://hub.docker.com/_/postgres/)
For connect to database via docker-compose, you should execute next command:

```bash
docker-compose up -d <database_container>
docker-compose run <database_container> bash
psql -U postgres -h <database_container>
```

## Django

For connect from your django project, replace database section in settings to next:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': <name>,
        'USER': <login>,
        'PASSWORD': <password>,
        'HOST': '', # Set to empty string for localhost.
        'PORT': '', # Set to empty string for default.
    }
}
```

Also, you should install additional library named **psycopg2**

```bash
pip install psycopg2
```
