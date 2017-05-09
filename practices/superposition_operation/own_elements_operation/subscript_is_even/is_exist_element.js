'use strict';
var is_exist_element = function (collection, element) {

  var result = [];
  for (var i in collection) {
    if (i % 2 === 0) {
      result.push(collection[i]);
      /* if (collection[i + 1] === element) {
       bool = true;
       }
       if (collection[i + 1] !== element) {
       bool = true;
       }*/
      if (collection[i]===element) {
        return false;
      }

    }
  }

  for (var i in result) {
    if (result[i] === element) {
      return true;
    }
  }

};
module.exports = is_exist_element;
