/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

const plusOne = digits => {
  if (!digits || digits.length === 0) return [];
  if (digits.length === 1 && digits[0] < 9) return [digits[0] + 1];
  let i = digits.length - 1;

  while (i >= 0 && digits[i] === 9) {
    digits[i] = 0;
    i--;
  }
  
  if (i < 0) {
    return [1, ...digits];
  } else {
    digits[i] = digits[i] + 1;
  }
  return digits;
};

console.log(plusOne([0])) // [1];
console.log(plusOne([9])) // [1, 0];
console.log(plusOne([4, 3, 2, 1])) // [4, 3, 2, 2];
console.log(plusOne([1, 2, 3])) // [1, 2, 4];