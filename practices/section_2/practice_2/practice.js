function count_same_elements(collection) {
  var result = [];

  collection.forEach((element, index) => {
    var item = element.split("-");
    if (item.length > 1) {
      collection.splice(index, 1);
      for (var i = 0; i < item[1]; i++) {
        collection.push(item[0]);
      }
    }
  });

  collection.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection.filter(element => element === item).length});
  });

  return result;
}

module.exports = count_same_elements;
