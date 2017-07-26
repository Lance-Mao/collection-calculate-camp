'use strict';

function get_integer_interval_2(number_a, number_b) {
  if (number_a > number_b) return getEvenInterval(number_a, number_b);
  if (number_a < number_b) return getEvenInterval(number_b, number_a).reverse();
  if (number_a % 2 === 0) return [number_a];

  return [];
}

function getEvenInterval(maxNumber, minNumber) {
  let evenInterval = [];
  maxNumber = maxNumber % 2 === 0 ? maxNumber : maxNumber - 1;
  for (; maxNumber >= minNumber; maxNumber -= 2)
    evenInterval.push(maxNumber);

  return evenInterval;
}

module.exports = get_integer_interval_2;
