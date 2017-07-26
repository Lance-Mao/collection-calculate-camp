'use strict';

function grouping_count(collection) {

  var result = {};
  collection.filter(item => result[item]!==undefined ? ++result[item] : result[item] = 1);

  return result;
}

module.exports = grouping_count;
