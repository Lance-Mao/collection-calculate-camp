'use strict';

function choose_no_repeat_number(collection) {

  let noSame = [];
  collection.filter(item => {
    if (!noSame.includes(item)){
      noSame.push(item)
    }
  })

  return noSame;
}


module.exports = choose_no_repeat_number;
