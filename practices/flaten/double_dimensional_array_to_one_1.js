'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = eval("["+collection+"]");
  /*for (var i in collection){
    for (var j in collection[i]) {
      if (collection[i].type  )
      result.push(collection[i][j]);
    }
  }*/

  return result;
}

module.exports = double_to_one;
