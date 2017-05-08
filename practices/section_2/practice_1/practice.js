function count_same_elements(collection) {
  //在这里写入代码
  var result = {};
  var a;
  for (var i in collection) {
    a = collection[i];
    b = 2;
    result.push({key: a, value: b});
  }
  return result;
}

module.exports = count_same_elements;
