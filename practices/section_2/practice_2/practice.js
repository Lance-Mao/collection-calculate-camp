function count_same_elements(collection) {
  var resultArray = [];
  var index;
  var sum = 0;

  while (true) {
    var re = [];
    var count = 0;
    index = sum;
    for (var i in collection) {
      if (collection[index] === collection[i]) {
        count++;
      }
    }
    sum += count;
    re = collection[index].split("-");
    if (re.length === 1) {
      resultArray.push({key: collection[index], count: count});
    } else {
      resultArray.push({key: re[0], count: parseInt(re[1])})
    }
    if (sum >= collection.length) {
      break;
    }
  }

  return resultArray;
}

module.exports = count_same_elements;
