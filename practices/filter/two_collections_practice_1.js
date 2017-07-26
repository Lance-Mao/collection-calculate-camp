'use strict';

function choose_common_elements(collection_a, collection_b) {


  return collection_a.filter(item => collection_b.includes(item));
}



module.exports = choose_common_elements;
