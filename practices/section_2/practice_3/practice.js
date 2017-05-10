function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var index = 0;
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
    if (collection[index].indexOf("-")!== -1) {
      result.push({name:collection[index].indexOf("-")[0], summary: collection[index].indexOf("-")[1]});
    }
    if (collection[index].indexOf(":") !== -1) {
      result.push({name: collection[index].indexOf(":")[0], summary: collection[index].indexOf(":")[1]});
    }
    result.push({name: collection[index], summary: count});

    if (sum >= collection.length) {
      break;
    }
  }

  return result;
}

module.exports = count_same_elements;
