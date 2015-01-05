window.Application1 = $.extend(true, window.Application1, {
  "config": {
    "layoutSet": "navbar",
    "navigation": [
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      }
    ]
  }
});