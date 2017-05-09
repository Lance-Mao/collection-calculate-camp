
function get_letter_interval1(number_a, number_b) {
  //在这里写入代码
  var resultArray = [];
  if (number_a<number_b) {
    for (var i=number_a;i<=number_b;i++) {
      resultArray.push(i);
    }
  }
  if (number_b<number_a) {
    for (var i=number_a;i>=number_b;i--) {
      resultArray.push(i);
    }
  }
  if (number_b===number_a) {
    resultArray.push(number_a);
  }

  return resultArray;
}

module.exports = get_letter_interval1;
