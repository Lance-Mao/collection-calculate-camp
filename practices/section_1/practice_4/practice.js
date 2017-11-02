function collect_same_elements(collection_a, object_b) {
  // var result = [];
  // for (var i in collection_a) {
  //   for (var j in object_b.value) {
  //     if (collection_a[i].key === object_b.value[j]) {
  //       result.push(collection_a[i].key);
  //     }
  //   }
  // }
  // return result;

  let result = [];
  collection_a.map(item => {
    if (object_b.value.filter(element => element === item.key).length !== 0) {
      result.push(item.key);
    }
  });

  return result;
}

module.exports = collect_same_elements;
