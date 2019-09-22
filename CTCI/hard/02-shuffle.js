/*
CTCI - Hard problem 2
Write a method to shuffle a deck of cards. It must be a perfect shuffle - in other words, each of the 52! permutations of the deck has to be equally likely. Assume that you are given a random number generator which is perfect

*/

const randomNum = (low, high) => {
  return low + Math.random() * (high - low + 1);
}

const shuffleArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    const k = randomNum(0, i);
    const temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
  }
}

