'use strict';

function choose_even(collection) {

  return collection.filter(item => item % 2 ===0);
}

module.exports = choose_even;
