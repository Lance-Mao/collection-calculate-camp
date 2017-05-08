function create_updated_collection_a(collection_a, object_b) {
  //在这里写入代码

  var result = [];
  var index = 0;
  var sum = 0;
  while (true) {
    var count = 0;
    index = sum;
    for (var i in collection_a) {
      if (collection_a[index] === collection_a[i]) {
        count++;
      }
    }
    sum += count;
    result.push({key: collection_a[index], count: count});
    if (sum >= collection_a.length) {
      break;
    }
  }

  return sub(result, object_b);
}

function sub(collection,object) {
  for (var i in collection) {
    for (var j in object.value) {
      if (collection[i].key === object.value[j]) {
        if (collection[i].count % 3 === 0) {
          collection[i].count = collection[i].count -= collection[i].count / 3;
        } else if (collection[i].count % 3 === 1) {
          collection[i].count = collection[i].count -= (collection[i].count - 1 ) / 3;
        } else if (collection[i].count % 3 === 2) {
          collection[i].count = collection[i].count -= (collection[i].count-2) / 3;
        }
      }
    }
  }

  return collection;
}

module.exports = create_updated_collection_a;
