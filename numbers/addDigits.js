/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
*/

const addDigits = num => {
  if (num / 10 < 1) {
    return num;
  } else {
    let result = 0;
    while (num !== 0) {
      result += num % 10;
      num = parseInt(num / 10);
    }
    return addDigits(result);
  }
};

// O(1) solution
const addDigitsO1 = num => {
  if(num > 0)
    return num % 9 === 0 ? 9 : num % 9;
  else
    return 0;
};

console.log(addDigits(38));
console.log(addDigitsO1(38));