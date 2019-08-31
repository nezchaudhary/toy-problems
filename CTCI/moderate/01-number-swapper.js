/* 
Write a function to swap a number in place (that is, without a temporary variable)

*/


const numberSwapper = (a, b) => {
  a = a - b; // difference between a and b
  b = b + a; // use the new value to a and add to b as that is just the difference
  a = b - a; // b is now a, just subtract a as that is the difference from before
  // e g. a = 9, b = 4
  // a = a - b (9 - 4 = 5)
  // b = b + a (4 + 5 = 9)
  // a = b - a (9 - 5 = 4)
  // the values have been reversed
  return [a, b];
};

const numberSwapperInBit = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
 
  // e g. a = 9 = 1001, b = 4 = 0100
  // a = a ^ b (9 = 1001 ^ 4 = 0100 // 1101 = 13)
  // b = a ^ b (13 = 1101 ^ 9 = 0100 // 1001 = 9)
  // a = a ^ b (13 = 1101 ^ 9 = 1001 // 0100 = 4)
  // the values have been reversed
  // It works!! But how to make it intuitive!!! HOW!!!!!
  return [a, b];
};

console.log(numberSwapper(9, 4));// [4, 9];