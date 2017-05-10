function count_same_elements(collection) {
  collection.forEach((element, index) => {
    if (element.length > 1) {
      let temporaryArray = element.split("");
      let number = parseInt(element.replace(/[^0-9]/ig, ""));
      collection.splice(index, 1);
      for (let a = 0; a < number; a++) {
        collection.splice(index, 0, temporaryArray[0])
      }

    }
  });
  let result = [];

  collection.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection.filter(element => element === item).length});
  });

  return result
}

module.exports = count_same_elements;
