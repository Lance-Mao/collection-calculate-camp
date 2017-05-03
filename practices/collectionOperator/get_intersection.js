'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var j in collection_b) {
    for (var i in collection_a) {
      if (collection_a[i] == collection_b[j]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = get_intersection;
