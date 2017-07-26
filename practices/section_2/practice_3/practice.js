function count_same_elements(collection) {
  let sameElementCount = [];

  collection.map(element => {
    let nameIndex = findContainsKeyIndex(sameElementCount, element);
    if (nameIndex !== -1) addKeyCount(sameElementCount, nameIndex, element);
    else sameElementCount.push(createObj(element));
  });

  return sameElementCount;
}

function findContainsKeyIndex(sameElementCount, name) {
  return sameElementCount.findIndex(element => element.name === name.charAt(0));
}

function addKeyCount(sameElementCount, nameIndex, element) {
  let [name, summary] = getKeyCount(element);
  sameElementCount[nameIndex].summary += summary;
}

function createObj(element) {
  let [name, summary] = getKeyCount(element);

  return {name: name, summary: summary};
}

function getKeyCount(name) {
  let nameCount = name.replace(/-|\[|\]|:/g, " ").split(" ");

  if (nameCount.length === 1) return [name, 1];

  return [name[0], parseInt(nameCount[1])];
}

module.exports = count_same_elements;
