function count_same_elements(collection) {
  //在这里写入代码
  /* var re = {};
   for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
   {
   var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
   if (!re[rv[1]])
   re[rv[1]] = 0;
   re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
   }

   return re;*/

  var result = [];
  var index = 0;
  var sum = 0;
  while (true) {
    var count = 0;
    index = sum;
    for (var i in collection) {
      if (collection[index] === collection[i]) {
        count++;
      }
    }
    sum += count;
    result.push({key: collection[index], count: count});
    if (sum >= collection.length) {
      break;
    }
  }
  return result;
}

module.exports = count_same_elements;
