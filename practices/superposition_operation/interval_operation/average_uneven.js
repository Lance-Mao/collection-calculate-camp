'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var count = 0;
  for (var i in collection) {
    if (collection[i]%2===1) {
      sum += collection[i];
      count++;
    }
  }
  return sum / count;
}

module.exports = average_uneven;
