'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = []
  for (var i in collection) {
    if (i%2===1) {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = even_to_letter;
