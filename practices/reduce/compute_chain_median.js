'use strict';

function compute_chain_median(collection) {
  //在这里写入代码

  var num = 0;
  collection = collection.split("->");
  collection.sort(function (a, b) {
    return a - b > 0 ? 1 : -1
  });
  if (collection.length % 2 === 0) {
    num = (parseInt(collection[collection.length / 2 - 1]) + parseInt(collection[(collection.length / 2 )])) / 2;
  } else {
    num = parseInt(collection[((collection.length + 1) / 2)]);
  }
  return num;
  /*
   return result[result.length-1) / 2];
   */
}

module.exports = compute_chain_median;
