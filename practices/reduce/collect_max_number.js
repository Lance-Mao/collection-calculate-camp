'use strict';

function collect_max_number(collection) {

  return collection.reduce((a, b) => a < b ? b : a);
}

module.exports = collect_max_number;
