'use strict';
var map_to_four_multiples_add_one = function (collection) {
  var result = [];
  for (var i in collection) {
    result.push(collection[i] * 4 + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
