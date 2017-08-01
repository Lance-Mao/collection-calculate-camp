function create_updated_collection(collection_a, object_b) {
  collection_a.map(item =>{
  if (object_b.value.includes(item.key)) {
    item.count--
  }})

  return collection_a;
}

module.exports = create_updated_collection;
