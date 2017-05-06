'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var result_a = [];

  result_a=Array.from((new Set(collection)));
  for (var  i in result_a){
    var count = 0;
    for (var j in collection) {
      if (result_a[i]===collection[j]) {
        count++;
      }
    }
    result[result_a[i]] = count;
  }

  /*{'1':6}*/
  return result;
}

module.exports = grouping_count;
