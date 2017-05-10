function count_same_elements(collection) {
  var result = [];
  var index;
  var sum = 0;

  while (true) {
    var count = 0;
    index = sum;
    for (var i in collection) {
      if (collection[index] === collection[i]) {
        count++;
      }
    }
    sum += count;
    result.push({key: collection[index], count: count});
    if (sum >= collection.length) {
      break;
    }
  }

  return result;
}

module.exports = count_same_elements;
