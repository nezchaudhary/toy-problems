/*
Count and Say
The count - and - say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count - and - say sequence.

  Note: Each term of the sequence of integers will be represented as a string.

    Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"

*/

/**
 * @param {number} n
 * @return {string}
 */

 
const countAndSay = (n) => {
  let round = 1;
  let currentValue = '1';
  let count = 1;
  while (round < n) {
    let temp = '';
    for (let i = 0; i <= currentValue.length - 1; i++) {
      if (currentValue[i] === currentValue[i + 1]) {
        count++;
      } else {
        temp += count;
        temp += currentValue[i];
        count = 1;
      }
    }
    currentValue = temp;
    round++
  }
  return currentValue;
};

console.log(countAndSay(3));
console.log(countAndSay(5));
console.log(countAndSay(8));