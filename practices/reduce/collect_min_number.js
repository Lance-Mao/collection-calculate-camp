'use strict';

function collect_min_number(collection) {

  return collection.reduce((a, b) => a > b ? b : a);
}

module.exports = collect_min_number;

