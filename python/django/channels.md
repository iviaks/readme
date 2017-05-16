# How to setting Django-channels?
## Installing

```bash
pip install -U channels
```
## Python
### project/settings.py

```python
INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    ...
    'channels',
)
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "asgi_redis.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(os.environ.get('REDIS_HOST', 'localhost'), 6379)],
        },
        "ROUTING": "<path to routes>",
    },
}
```

### project/routing.py
```python
from channels.routing import route

from .consumers import ws_connect, ws_disconnect, ws_message

channel_routing = [
    route("websocket.connect", ws_connect, path=r'<path to websocket>'),
    route("websocket.receive", ws_message),
    route("websocket.disconnect", ws_disconnect),
]
```


### project/consumers.py
```python
import json

from channels.sessions import channel_session

# Connected to websocket.connect
@channel_session
def ws_connect(message, room):
    message.reply_channel.send({"accept": True})
    message.channel_session['room'] = room
    Group("chat-%s" % room).add(message.reply_channel)


# Connected to websocket.receive
@channel_session
def ws_message(message):
    msg = json.loads(message['text'])
    # Do something with message


# Connected to websocket.disconnect
@channel_session
def ws_disconnect(message):
    Group("chat-%s" % message.channel_session.get('room')).discard(
        message.reply_channel)
```

## Front-end

```javascript
var protocol = window.location.protocol == "https:" ? "wss://" : "ws://",
    host = window.location.host,
    url = '', // Path to backend socket url
    socket = new WebSocket(protocol + host + url); // close socket => socket.close()

socket.onmessage = function(message){
    // handle retrieving messages
}
socket.onopen = function(message){
    // handle opening websocket
}
```
