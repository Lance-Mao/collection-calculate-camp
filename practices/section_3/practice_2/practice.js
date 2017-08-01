function create_updated_collection(collection_a, object_b) {
  let objectBValues = object_b.value;

  collection_a.map(element => {
    if (objectBValues.includes(element.key))
      if(element.count >= 3) element.count -= parseInt(element.count / 3);
  })

  return collection_a;
}
module.exports = create_updated_collection;
