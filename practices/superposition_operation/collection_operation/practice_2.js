'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var result = [];
  for (var i in collection) {
    if (collection[i] % 2 === 1) {
      collection[i] = collection[i] * 3 + 2;
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

