'use strict';
var even_asc_odd_desc = function (collection) {
  var result1 = [];
  var result2 = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result1.push(collection[i]);

    } else {
      result2.push(collection[i]);

    }
  }

  result1.sort(com);
  result2.sort(con);

  return result1.concat(result2);

};

function com(a, b) {
  return a - b;
}

function con(a, b) {
  return b - a;
}
module.exports = even_asc_odd_desc;
