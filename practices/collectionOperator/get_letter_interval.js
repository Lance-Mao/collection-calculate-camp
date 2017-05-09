'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  if (number_b>number_a) {
    for (var i = number_a;i<=number_b;i++) {
      result.push(array[i]);
    }
    return result;
  }

  if (number_b<number_a) {
    for (var i = number_a;i>=number_b;i--) {
      result.push(array[i]);
    }
    return result;
  }

  if (number_b==number_a) {
    result.push(array[number_a]);
    return result;
  }


}

module.exports = get_letter_interval;
