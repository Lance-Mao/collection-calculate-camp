'use strict';
function map_to_even(collection){
  var result = [];
  for (var i in collection) {
    result.push(collection[i] * 2);
  }
  return result;
}
module.exports = map_to_even;
