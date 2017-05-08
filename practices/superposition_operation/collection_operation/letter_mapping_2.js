'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var sum = 0;
  for (var i in collection) {
    sum += collection[i];
  }
  /*  if (sum%collection.length===0) {
   return array[sum / collection.length];
   }else {
   return
   }*/
  return sum % collection.length === 0 ? array[sum / collection.length - 1] : array[parseInt(sum / collection.length)];
}

module.exports = average_to_letter;

