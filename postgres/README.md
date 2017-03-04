# Install
```bash
sudo apt-get install postgresql libpq-dev python-dev python3-dev build-essential postgresql-server-dev-all
```

# Login to postgres
```bash
sudo -u postgres psql
```

# Work with SQL
```sql
CREATE DATABASE <name>;
CREATE USER <login> WITH password '<password>';
GRANT ALL privileges ON DATABASE <name> TO <login>;
```

# Work from command line
```bash
createdb <name>;
dropdb <name>;
createuser -s <name>;
```

# Connect from docker
```bash
docker-compose up -d db
docker exec -ti <name_of_container> bash
```

# Django
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
