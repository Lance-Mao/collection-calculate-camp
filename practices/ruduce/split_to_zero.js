'use strict';

function spilt_to_zero(number, interval) {
  var resultArray = [];

  while (number >= 0) {
    resultArray.push(number);
    number = (number * 10 - interval * 10) / 10;
  }
  if (resultArray[resultArray.length - 1] !== 0) {
    resultArray.push((resultArray[resultArray.length - 1] * 10 - interval * 10) / 10);
  }
  return resultArray;
}

module.exports = spilt_to_zero;
