'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum= 0;
  for (var i in collection) {
    sum += collection[i];
  }
  return sum / collection.length;
}

module.exports = compute_average;

