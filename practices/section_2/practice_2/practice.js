function count_same_elements(collection) {
  const result = [];

  collection.forEach((element, index) => {
    const item = element.split("-");
    if (item.length > 1) {
      collection.splice(index, 1);
      for (let i = 0; i < item[1]; i++) {
        collection.push(item[0]);
      }
    }
  });

  collection.forEach(item => {
    if (!result.find(element => element.key === item))
      result.push({key: item, count: collection.filter(element => element === item).length});
  });

  return result;

  // let array = [];
  //
  // let times = 1;
  // for (let i = 0; i < collection.length; i++) {
  //   let element = collection[i].split("-");
  //   if (collection[i] === collection[i + 1]) {
  //     times++;
  //   } else {
  //     if (element.length <= 1) {
  //       array.push({key: element[0], count: times});
  //     } else {
  //       array.push({key: element[0], count: Number(element[1])});
  //     }
  //
  //     times = 1;
  //   }
  // }
  //
  // return array;
}

module.exports = count_same_elements;
