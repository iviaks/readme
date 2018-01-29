# Python

## Python Debug Server

```bash
python -m smtpd -n -c DebuggingServer localhost:1025
```

## Upgrade all packages

```bash
pip freeze --local | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U
```
