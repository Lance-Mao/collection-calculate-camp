'use strict';
var number_map_to_word = function(collection){
  var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  for (var i in collection) {
    if (collection[i]%26===0) {
      result.push(array[parseInt(collection[i] / 26 - 1)] + array[collection[26]]);
    }else {
      result.push(array[parseInt(collection[i] / 26)] + array[collection[i] % 26]);
    }
  }     //parseInt() 函数可解析一个字符串，并返回一个整数。
  return result;
};

module.exports = number_map_to_word;
