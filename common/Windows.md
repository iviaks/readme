# Windows

## Install choco

```cmd
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

## Install packages

```cmd
choco install chocolatey-core.extension adobereader googlechrome jre8 jdk8 vcredist140 7zip python3 python2 git visualstudio2017buildtools zoom k-litecodecpackfull yarn slack cmake make discord nvm telegram conemu vscode sublimemerge
```
