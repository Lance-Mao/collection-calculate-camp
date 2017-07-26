'use strict';

function get_letter_interval_2(number_a, number_b) {
  let rounds = getRounds(number_a > number_b ? number_a : number_b);

  if (number_a > number_b) return getRoundsLetters(rounds).splice(number_b - 1, number_a - number_b + 1).reverse();
  if (number_a < number_b) return getRoundsLetters(rounds).splice(number_a - 1, number_b - number_a + 1);

  return [getRoundsLetters(rounds)[number_a - 1]];
}

function getBasicLetter() {
  let basicLetter = [];
  for (let i = 97; i < 97 + 26; ++i)
    basicLetter.push(String.fromCharCode(i));

  return basicLetter;
}

function getRoundsLetters(rounds) {
  let roundsLetters = getBasicLetter();
  let basicLetters = getBasicLetter();

  for (let i = 0; i < rounds - 1; ++i)
    basicLetters.map(letter => roundsLetters.push(basicLetters[i] + letter));

  return roundsLetters;
}

function getRounds(number) {
  let rounds = number / 26;
  if (number % 26 !== 0) rounds += 1;

  return rounds;
}

module.exports = get_letter_interval_2;

