'use strict';
var even_group_calculate_average = function (collection) {
  let result = [0, 0, 0, 0, 0, 0];
  let isEven = [false, false, false];

  for (let index = 1; index < collection.length; index += 2) {
    if (collection[index] % 2 === 0) {
      isEven[2] = true;
      if (collection[index] < 10) {
        result[0] += collection[index];
        result[3] += 1;
        isEven[1] = true;
      } else if (collection[index] < 100 && collection[index] >= 10) {
        result[1] += collection[index];
        result[4] += 1
        isEven[2] = true;
      } else if (collection[index] < 1000 && collection[index] >= 100) {
        result[5] += 1
        result[2] += collection[index];
      }
    }
  }

  if (!isEven[2]) return [0];

  if (isEven[0] || isEven[1]) return [result[0] / result[3], result[1] / result[4], result[2] / result[5]];

  return [result[2] / result[5]];
}

module.exports = even_group_calculate_average;
