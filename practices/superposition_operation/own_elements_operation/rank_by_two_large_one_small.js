'use strict';
function rank_by_two_large_one_small(collection) {
  let littleIndex = 0;
  let littleNumber = 0;
  let littleElement = [];
  let upperElement = [];
  let result = [];

  collection.sort((a, b) => a - b > 0 ? 1 : -1);

  for (let index = 0; index < collection.length; ++index) {
    if (index === littleIndex && littleElement.length < parseInt(collection.length / 3)) {
      littleElement.push(collection[index]);
      littleIndex += 3;
    } else {
      upperElement.push(collection[index]);
    }

  }

  littleIndex = 2
  for (let index = 0; index < upperElement.length; ++index) {
    if (index == littleIndex) {
      result.push(littleElement[littleNumber]);
      littleIndex += 2;
      ++littleNumber;
    }
    result.push(upperElement[index]);
  }

  return result;
}
module.exports = rank_by_two_large_one_small;
