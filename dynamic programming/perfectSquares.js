/*

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/

const perfectSquares = n => {
  if (n === 0) return 0;
  if (n < 4) return n;
  const squares = [];
  let i = 1;
  while (i < n) {
    if (i*i <= n) {
      squares.push(i*i);
    } else {
      break;
    }
    i++;
  }

  const sums = new Array(n + 1).fill(n + 1);
  sums[0] = 0;
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= squares[i]) {
        sums[j] = Math.min(sums[j], sums[j - squares[i]] + 1);
      }
    }
  }
  return sums[n];
};

console.log('perfect squares', perfectSquares(12));

