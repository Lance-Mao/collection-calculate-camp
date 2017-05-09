'use strict';
var calculate_median = function (collection) {
  var result = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
  }

  return hh(collection);
};

function hh(resultA) {
  if (resultA.length % 2 !== 0) {
    return resultA[parseInt((resultA.length + 1) / 2)] - 1;
  } else {
    return resultA[parseInt(resultA.length / 2)];
  }
}
module.exports = calculate_median;
