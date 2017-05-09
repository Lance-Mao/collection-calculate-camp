'use strict';
function rank_by_two_large_one_small(collection) {
  var resultArray = [];
  collection.sort(judge);
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 3 === 0) {
      resultArray.push(collection[i - 1]);
      resultArray.push(collection[i]);
      resultArray.push(collection[i - 2]);
    }else if ((i+1)===collection.length&&(i+1)%3===2) {
      resultArray.push(collection[i - 1]);
      resultArray.push(collection[i]);
    }else if ((i+1)===collection.length&&(i+1)%3===1){
      resultArray.push(collection[i - 1]);
    }
  }

  return resultArray;
}

function judge(a, b) {
  return a - b;
}
module.exports = rank_by_two_large_one_small;
