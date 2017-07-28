'use strict';

function compute_average(collection) {

  return collection.reduce((a, b) => a + b)/collection.length;
}

module.exports = compute_average;

