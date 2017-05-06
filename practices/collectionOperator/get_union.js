'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (var i in collection_b) {
    if (isExist(collection_b[i],collection_a)) {  //var collection_a = [10, 27, 28, 19, 5];
                                                  //var collection_b = [5, 78, 28, 19, 23];
      collection_a.push(collection_b[i]);
    }
  }

  return collection_a;
}
function isExist(elementA,collection_a) {
  var a =0;
  for (var j in collection_a) {
    if (collection_a[j]===elementA) {
     a++;
    }

  }
  if(a===0){
    return true;
  }else{
    return false;
  }

}

module.exports = get_union;

