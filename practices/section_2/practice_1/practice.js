function count_same_elements(collection) {
  var result = [];

  collection.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection.filter(element => element === item).length});

  });

  return result;
}

module.exports = count_same_elements;
