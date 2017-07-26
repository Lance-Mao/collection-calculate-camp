'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let arrey = []
    collection_a.filter(item => collection_b.map(item2 => {
    if (item % item2 === 0) {
      arrey.push(item);
    }
  }));

  return arrey;
}

module.exports = choose_divisible_integer;
