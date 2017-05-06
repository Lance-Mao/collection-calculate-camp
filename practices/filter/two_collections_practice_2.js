'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for (var i in collection_a) {
    if (judgment(collection_a[i], collection_b)) {
      result.push(collection_a[i]);
    }
  }
  return result;
}

function judgment(ement, collection_b) {
  var count = 0;
  for (var j in collection_b) {
    if (ement === collection_b[j]) {
      count++;
    }
  }

  if (count===0) {
    return true;
  }else {
    return false;
  }
}
module.exports = choose_no_common_elements;
