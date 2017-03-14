'use strict';
export default string => {
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
