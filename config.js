{
  "bridge": {
    "name": "HomeBridge",
    "username": "CC:22:3D:E3:CE:30",
    "port": 51826,
    "pin": "031-45-154"
  },

  "description": "HomeBridge HTTP Status Control + Color temp",

  "accessories": [
    {
      "accessory": "Http",
      "name": "Alfresco Lamp",
      "switchHandling": "realtime",
      "http_method": "GET",
      "on_url": "http://localhost/controller/1700/ON",
      "off_url": "http://localhost/controller/1700/OFF",
      "status_url": "http://localhost/status/100059",
      "status_on": "ON",
      "status_off": "OFF",
      "service": "Light",
      "brightnessHandling": "yes",
      "brightness_url": "http://localhost/controller/1707/%b",
      "brightnesslvl_url": "http://localhost/status/100054",
      "sendimmediately": "",
      "username" : "",
      "password" : ""
    },
    {
      "accessory": "Http",
      "name": "Color Changing Lamp",
      "switchHandling": "realtime",
      "http_method": "GET",
      "on_url": "http://localhost/controller/1700/ON",
      "off_url": "http://localhost/controller/1700/OFF",
      "status_url": "http://localhost/status/100059",
      "status_on": {
        "power": "ON",
        "color": "Blue"
      },
      "status_off": {
        "power": "OFF"
      },
      "service": "Light",
      "brightnessHandling": "yes",
      "brightness_url": "http://localhost/controller/1707/%b",
      "brightnesslvl_url": "http://localhost/status/100054",
      "sendimmediately": "",
      "username" : "",
      "password" : ""
    }
  ]
}