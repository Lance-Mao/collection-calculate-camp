'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for (var i in collection_a) {
    if (division(collection_a[i], collection_b)) {
      result.push(collection_a[i]);
    }
  }
  return result;
}

function division(ement, collection_b) {
  var count = 0;
  for (var i in collection_b) {
    if (ement % collection_b[i] ===0) {
      count++;
    }
  }
  if (count===0){
    return false;
  }else {
    return true;
  }
}

module.exports = choose_divisible_integer;
