'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码
  var array = ['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var sum = 0;
  var ave = 0;
  for (var i = collection[0]; i < collection.length - 1; i++) {
    sum += collection[i];
  }
  ave = parseInt(sum / collection.length + 1);
  arr(ave,array);
  return array[parseInt(sum / collection.length + 1)];

}

function arr(ave,array) {
  if (ave<=26) {
    return array[ave];
  }else {
    return array[]
  }
}
module.exports = rank_by_two_large_one_small;
