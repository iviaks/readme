# VirtualEnvs

For better development, you can use virtual environments.

## VirtualenvWrapper

### Installing

```bash
sudo pip install virtualenvwrapper
```

### ~/.bashrc

```bash
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

### Create action after venv starting

```bash
$VIRTUAL_ENV/bin/postactivate
```

## Virtualfish

1. `pip install virtualfish`
2. Edit `~/.config/fish/config.fish`, adding a line that reads `eval (python -m virtualfish)`
3. [Add virtualfish to your prompt](http://virtualfish.readthedocs.org/en/latest/install.html#customizing-your-fish-prompt)
4. `vf new myvirtualenv; which python`
