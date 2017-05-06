'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];

  if (number_a < number_b) return increasing(number_a, number_b, array, result);
  if (number_a > number_b) return descreae(number_a, number_b, array, result);
  return [array[parseInt(number_a / 26)] + array[number_a % 26]];

}

function increasing(number_a, number_b, array, result) {
  for (; number_a <= number_b; ++number_a) {
    if (number_a % 26 == 0) {
      result.push(array[parseInt(number_a / 26 - 1)] + array[26]);
    } else {
      result.push(array[parseInt(number_a / 26)] + array[number_a % 26]);
    }
  }
  return result;
}

function descreae(number_a, number_b, array, result) {
  for (; number_a >= number_b; --number_a) {
    if (number_a % 26 == 0) {
      result.push(array[parseInt(number_a / 26 - 1)] + array[26]);           //parseInt() 函数可解析一个字符串,并返回一个整数
    } else {
      result.push(array[parseInt(number_a / 26)] + array[number_a % 26]);
    }
  }
  return result;
}
module.exports = get_letter_interval_2;

