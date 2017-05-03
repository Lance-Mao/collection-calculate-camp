'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_b>number_a) {
    for (var i = number_a;i<=number_b;i++) {
      result.push(i);
    }
    return result;
  }

  if (number_b<number_a) {
    for (var i = number_a;i>=number_b;i--) {
      result.push(i);
    }
    return result;
  }

  if (number_b==number_a) {
    result.push(number_a);
    return result;
  }


}

module.exports = get_letter_interval;
