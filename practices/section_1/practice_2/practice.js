function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  // for (var i in collection_a) {
  //   for (var j in collection_b) {
  //     for (var k in collection_b[j]) {
  //       if (collection_a[i]===collection_b[j][k]) {
  //         result.push(collection_a[i]);
  //       }
  //     }
  //   }
  // }
  // return result;

  collection_a.map(item => {
    if (collection_b[0].includes(item)){
      result.push(item);
    }
  })

  return result;
}

module.exports = collect_same_elements;
