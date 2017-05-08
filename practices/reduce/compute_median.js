'use strict';

function compute_median(collection) {
  //在这里写入代码
  if (collection.length % 2 != 0) {
    return collection[(collection.length + 1) / 2 - 1];
  }

  if (collection.length <= 4) {
    return (collection[collection.length / 2 - 1] + collection[collection.length / 2] ) / 2;
  }

  collection.sort(function (a,b) {
    return a - b > 0 ? 1 : -1
  })
  return (collection[collection.length / 2 - 1] + collection[collection.length / 2] ) / 2 ;
}

module.exports = compute_median;


