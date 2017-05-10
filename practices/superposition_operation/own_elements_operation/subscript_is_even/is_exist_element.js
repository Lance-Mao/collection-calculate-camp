'use strict';
var is_exist_element = function (collection, element) {

  var result = [];
  var count = 0;
  for (var i in collection) {
    if (i % 2 === 0) {
      result.push(collection[i]);
      /* if (collection[i + 1] === element) {
       bool = true;
       }
       if (collection[i + 1] !== element) {
       bool = true;
       }*/
    }
  }

  for (var i = 0; i < result.length; i++) {
    if (result[i] === element) {
      count++;
    }
  }

  if (count === 0) {
    return false;
  } else {
    return true;
  }

};
module.exports = is_exist_element;
