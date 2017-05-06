'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = eval("[" + collection + "]");     // concat() 方法用于连接两个或多个数组。
  var coll = [];
  for (var i in result) {                        //arr.concat(arr2,arr3)
    if (sert(result[i], coll)) {
      coll.push(result[i]);
    }
  }
  return coll;
}

function sert(ement, coll) {
  var count = 0;
  for (var i in coll) {
    if (ement===coll[i]) {
      count++;
    }
  }
  if (count===0) {
    return true;
  }else {
    return false;
  }

}

module.exports = double_to_one;
