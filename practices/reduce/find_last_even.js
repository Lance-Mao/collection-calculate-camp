'use strict';

function find_last_even(collection) {

  for (var i =collection.length;i>=0;i--) {
    if (collection[i]%2===0) {
      return collection[i];
    }
  }
}

module.exports = find_last_even;
