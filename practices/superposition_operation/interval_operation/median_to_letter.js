'use strict';

function median_to_letter(collection) {

  let median = Math.floor((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);

  return getRoundsLetters(2)[median];
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

module.exports = median_to_letter;
