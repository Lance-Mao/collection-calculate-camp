'use strict';
var even_group_calculate_average = function (collection) {
  var result = [];
  var sum = [];    //计算一位数总和
  var sum1 = [];
  var sums = 0;
  var sums1 = 0;
  var sums2 = 0;
  var count = 0;   //统计一位数出现的总次数
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result.push(collection[i]);
    }
  }

  for (var i in uu(result)) {
    if (uu(result)[i] < 10) {
      sums += uu(result)[i];
      count++;
    } else if (uu(result)[i] >= 10 && uu(result)[i] < 100) {
      sums1 += uu(result)[i];
      count1++;
    } else if (uu(result)[i] >= 100 && uu(result)[i] < 1000) {
      sums2 += uu(result)[i];
      count2++;
    }
  }

  if (uu(result).length !== 0) {
    sum.push(sums / count);
    sum.push(sums1 / count1);
    sum.push(sums2 / count2);
    return sum;

  } else if (uu(result).length === 0) {
    sum.push(0);
    return sum;
  }

};

function uu(coll) {
  var result1 = [];
  for (var i in coll) {
    if (coll[i] % 2 === 0) {
      result1.push(coll[i]);
    }
  }
  return result1;
}

module.exports = even_group_calculate_average;
