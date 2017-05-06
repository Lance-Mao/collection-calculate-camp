'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for (var i in collections) {
    result.push(collections[i] * 3);
  }
  return result;
};

module.exports = map_to_three_multiples;
