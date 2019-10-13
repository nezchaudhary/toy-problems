/*
CTCI - Hard problem 2
Write a method to shuffle a deck of cards. It must be a perfect shuffle - in other words, each of the 52! permutations of the deck has to be equally likely. Assume that you are given a random number generator which is perfect

/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

const randomNum = (low, high) => {
  return low + Math.random() * (high - low + 1);
}

// Knuth Fisher-Yates Algorithm
const shuffleArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    const k = randomNum(0, i);
    const temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
  }
}

const shuffleDeck = function(deck) {
  //i: a ordered deck of 52 cards
  //o: an array of shuffled cards
  //c: none
  //e: 

  // create a copy of the deck

  //iterate over the cards random number of times
  for (let i = 0; i < deck.length; i++) {
    //find a random number between 0 and length
    let index = Math.floor(Math.random() * deck.length - i) + i;
    // swap the array values at that index with random index
    [deck[i], deck[index]] = [deck[index], deck[i]];  
  }

  return deck;

  // for (let i = deck.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [deck[i], deck[j]] = [deck[j], deck[i]]
  // }

  // return deck;
}

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};


