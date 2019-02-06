/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
  // i: decimal number
  // o: string representation of number
  // c: 
  // e: how many decimal points?
  let count = 1;
  while (!Number.isInteger(number * count)) {
    count++
  }
  return `${number * count}/${count}`;
};

console.log(toFraction(0.5)); // '1/2';
console.log(toFraction(1.8)); // '9/5'
console.log(toFraction(3.0)); // '3/1'; 
console.log(toFraction(2.5)); // '5/2';