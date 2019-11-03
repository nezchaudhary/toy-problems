/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// Time Complexity: O(log(x)). There are roughly log_10(x) digits in x.
// Space Complexity: O(1).
const reverse = x => {
  let result = 0;
  let num = x;
  let negative = false;
  const max = Math.pow(2, 31);
  
  if (num < 0) {
    negative = true;
    num = num * -1;
  }
  
  while (num > 0) {
    const curr = num % 10;
    num = parseInt(num / 10);    
    result = result * 10 + curr;
    if (result > max || result < -max) return 0;
  }

  return negative ? -Number(result) : Number(result);
};