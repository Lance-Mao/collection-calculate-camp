function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var index = 0;
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
    if (re.length === 2) {
      result.push({key: re[0], count: parseInt(re[1])})
    } else {
      result.push({key: collection[index], count: count});
    }
    if (sum >= collection.length) {
      break;
    }
  }

  return result;
}

module.exports = count_same_elements;
