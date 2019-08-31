/* Rand7fromRand5: Implement a method  rand7() given rand5(). That is given a method that generates a random integer between 0, 4 (inclusive), write a method that generates a random integer between 0 and 6 (inclusive) with equal probability */

// Use of nondeterministic Number of calls to achieve equal probability;
// Nondeterministic: No Guarantee om the number of of calls it may take to return a value
const rand5 = () => Math.floor(Math.random() * 6);  

const rand7 = () => {
  while (true) {
    const num = 5 * rand5() + rand5();
    if (num < 21) {
      return num % 7;
    }
  }
}