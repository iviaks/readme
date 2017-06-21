# VirtualenvWrapper

## Installing
```bash
sudo pip install virtualenvwrapper
```

## ~/.bashrc
```bash
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

## Create action after venv starting

```bash
$VIRTUAL_ENV/bin/postactivate
```
