'use strict';
var single_element = function (collection) {
  var result = [];
  var resu = [];
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result.push(collection[i]);
    }
  }

  for (var i = 0; i < distinct(result).length-1; i++) {
    resu.push(distinct(result)[i]);
  }

  return resu;


};
function distinct(arr) {
  var ret = [],
    length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        j = ++i;
      }
    }
    ret.push(arr[i + 1]);
  }
  return ret;
}
/*function judge(array) {
 for (var i = 0; i < array.length; i++) {
 var count = 0;
 for (var j = 0; j < array.length; j++) {
 if (array[i]===array[j]) {
 count++;
 array = array.remove(j);
 }
 }
 }
 }*/
module.exports = single_element;
