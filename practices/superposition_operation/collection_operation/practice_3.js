'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码

  var result = [];
  for (var i in collection) {
    if (collection[i] % 2 === 1) {
      collection[i] = collection[i] * 3 + 5;
      result.push(collection[i]);
    }
  }

  return sums(result);
}


function sums(coll) {
  var sum = 0;
  for (var i in coll) {
    sum += coll[i];
  }
  return sum;
}
module.exports = hybrid_operation_to_uneven;

