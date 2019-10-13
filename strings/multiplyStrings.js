/*

Given two non-negative integers n1 and n2 represented as strings, return the product of n1 and n2, also represented as a string.

Example 1:

Input: n1 = "2", n2 = "3"
Output: "6"
Example 2:

Input: n1 = "123", n2 = "456"
Output: "56088"
Note:

The length of both n1 and n2 is < 110.
Both n1 and n2 contain only digits 0-9.
Both n1 and n2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

const multiply = (n1, n2) => {
  if (n1 === '0' || n2 === '0') {
    return '0';
  }
  
  const result = new Array(n1.length + n2.length).fill(0);
  
  for (let n = n1.length - 1; n >= 0; n--) {   
    let overflow = 0;
    for (let m = n2.length - 1; m >= 0; m--) {
      const k = n + m + 1;
      const sum = n1[n] * n2[m] + overflow + result[k];

      result[k] = sum % 10;
      overflow = Math.floor(sum / 10);
    }
    
    result[n] += overflow;
  }
  
  return result.join('').replace(/^0*/, '');
};

console.log(multiply('123', '456'));