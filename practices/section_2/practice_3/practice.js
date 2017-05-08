function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var index = 0;
  var sum = 0;
  while (true) {
    var re = [];
    var re1 = [];
    var count = 0;
    index = sum;
    for (var i in collection) {
      if (collection[index] === collection[i]) {
        count++;
      }
    }
    sum += count;
    re = collection[index].split("-");
    re1 = collection[index].split(":");
    //re = eval("[" + collection[index] + "]");
    if (re.length === 2) {
      result.push({name: re[0], summary: parseInt(re[1])})
    }else if (re1.length==2) {
      result.push({name: re1[0], summary: parseInt(re1[1])})
    } else {
      result.push({name: collection[index], summary: count});
    }
    if (sum >= collection.length) {
      break;
    }
  }

  return result;
}

module.exports = count_same_elements;
