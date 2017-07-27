'use strict';

function find_first_even(collection) {

  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      return parseInt(collection[i]);
    }
  }
}

module.exports = find_first_even;

