function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i in collection_a) {
    for (var j in object_b.value) {
      if (collection_a[i].key === object_b.value[j]) {
        collection_a[i].count = collection_a[i].count -= 1;
      }
    }
  }

  return collection_a;
}

module.exports = create_updated_collection;
