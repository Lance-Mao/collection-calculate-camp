function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for (var i in collection_a) {
    for (var j in object_b.value) {
      if (collection_a[i] === object_b.value[j]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
