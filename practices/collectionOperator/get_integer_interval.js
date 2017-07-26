'use strict';

function get_integer_interval(number_a, number_b) {
  if (number_a > number_b) return getInterval(number_a, number_b);
  if (number_a < number_b) return getInterval(number_b, number_a).reverse();

  return [number_a];
}

function getInterval(maxNumber, minNumber) {
  let evenInterval = [];
  for (; maxNumber >= minNumber; maxNumber--)
    evenInterval.push(maxNumber);

  return evenInterval;
}

module.exports = get_integer_interval;

