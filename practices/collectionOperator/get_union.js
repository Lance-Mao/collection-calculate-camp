'use strict';

function get_union(collection_a, collection_b) {
  collection_b.map(element => {
      if (!collection_a.includes(element))
        collection_a.push(element)
    }
  );

  return collection_a;

}

module.exports = get_union;

