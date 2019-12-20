/*
Longest Line of Consecutive One in Matrix
Given a 01 matrix M, find the longest line of consecutive one in the matrix. The line could be horizontal, vertical, diagonal or anti-diagonal.
Example:
Input:
[[0,1,1,0],
[0,1,1,0],
[0,0,0,1]]
Output: 3
Hint: The number of elements in the given matrix will not exceed 10,000.

*/

/**
 * @param {number[][]} M
 * @return {number}
 */
const inBounds = (r, c, M) => {
  return r >= 0 && r < M.length && c >= 0 && c < M[0].length;
}

var longestLine = M => {
  const len = M.length;
  let result = 0;
  
  const recurse = (r, c, path) => {
    
    let curr = path;
    const val = M[r][c];
    if (val !== 1) {
      result = Math.max(result, curr);
      curr = 0;
    } else {
      curr++;
    }

    if (inBounds(r, c + 1, M)) {
      recurse(r, c + 1, curr);
    }

    if (inBounds(r + 1, c, M)) {
      recurse(r + 1, c, curr);
    }

    if (inBounds(r + 1, c + 1, M)) {
      recurse(r + 1, c + 1, curr);
    }
    
    result = Math.max(result, curr);
  }
  recurse(0, 0, 0);
  return result;
};

console.log(longestLine([[0,1,1,0],
  [0,1,1,0],
  [0,0,0,1]])) // 3
  console.log(longestLine([[1]])) // 1
console.log(longestLine([
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,1]])) // 3