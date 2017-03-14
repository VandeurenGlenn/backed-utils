var backedUtils = (function () {
'use strict';

var toJsProp = string => {
  let parts = string.split('-');
	if (parts.length > 1) {
    string = parts[0];
    for (let part of parts) {
      if (parts[0] !== part) {
         var upper = part.charAt(0).toUpperCase();
         string += upper + part.slice(1).toLowerCase();
      }
    }
  }
  return string;
};

var fireEvent = (type=String, detail=null, target=document) => {
  target.dispatchEvent(new CustomEvent(type, {detail: detail}));
};

var loadScript = src => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = result => {
      resolve(result);
    };
    script.onerror = error => {
      reject(error);
    };
    document.body.appendChild(script);
  });
};

var utils = {
  toJsProp: toJsProp,
  fireEvent: fireEvent,
  loadScript: loadScript
};

return utils;

}());
//# sourceMappingURL=utils.js.map
