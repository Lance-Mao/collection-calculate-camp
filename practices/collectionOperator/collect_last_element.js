'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var result;
  for (var i in collection){
    if (i==collection.length-1) {
      result = collection[i];
    }
  }
  return result;

}

module.exports = collect_last_element;
