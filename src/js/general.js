var MyAddEventListener = (function () {
  if (window.addEventListener) {
    return function (obj, event, funct, evtCapturing) {
      obj.addEventListener(event, funct, evtCapturing);
    };
  } else if (window.attachEvent) {
    return function (obj, event, funct) {
      obj.attachEvent("on" + event, funct);
    };
  }
})();

MyAddEventListener(document.getElementById('snake-zoom'), 'change', function (evt) {
  var newPercent = evt.target.value + '%';
  document.body.style.zoom = newPercent;
});

MyAddEventListener(document, 'keydown', function (evt) {
  var setRoute = function (id) {
    var elm = document.getElementById(id);
    if (elm) {
      elm.checked = true;
    }
  };

  if (evt.key === '1') {
    setRoute('ai-route1');
  } else if (evt.key === '2') {
    setRoute('ai-route2');
  } else if (evt.key === '3') {
    setRoute('ai-route3');
  }
});

var refreshButton = document.getElementById("refreshBtn");
if (refreshButton) {
  MyAddEventListener(refreshButton, "click", function (evt) {
    window.location.reload();
  });
}

var horizontalButton = document.getElementById("horizontalBtn");
if (horizontalButton) {
  MyAddEventListener(horizontalButton, "click", function (evt) {
    var rootUrl = window.location.toString().split('?')[0];
    window.location = rootUrl + '?horizontal=true';
  });
}

var verticalButton = document.getElementById("verticalBtn");
if (verticalButton) {
  MyAddEventListener(verticalButton, "click", function (evt) {
    var rootUrl = window.location.toString().split('?')[0];
    window.location = rootUrl;
  });
}

var horizontalOldDeviceButton = document.getElementById("horizontalOldDeviceBtn");
if (horizontalOldDeviceButton) {
  MyAddEventListener(horizontalOldDeviceButton, "click", function (evt) {
    var rootUrl = window.location.toString().split('?')[0];
    window.location = rootUrl + '?horizontal=true&oldDevice=true';
  });
}

var verticalOldDeviceButton = document.getElementById("verticalOldDeviceBtn");
if (verticalOldDeviceButton) {
  MyAddEventListener(verticalOldDeviceButton, "click", function (evt) {
    var rootUrl = window.location.toString().split('?')[0];
    window.location = rootUrl + '?oldDevice=true';
  });
}
