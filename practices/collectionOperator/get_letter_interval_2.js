'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result1 = [];
  var result2 = [];
  var result3 = [];
  var result4 = [];
  var result = [];
  var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (number_a < number_b) {
    for (var i = number_a; i < number_b; i++) {
      if (i / array == 0) {
        result3 = result1.push(array[i]);
      } else {
        result4 = result2.push(i / 26) + result2.push(i % 26);
      }
    }
    result = result3 + result4;
    return result;
  }
}

module.exports = get_letter_interval_2;

