/*

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:

Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6

*/


// Time Complexity = O(n^2 m) // Computing the maximum area for one point takes O(n) time, since it iterates over the values in the same column. This is done for all (n * m) points, giving O(n) * O(nm) = O(n^2 * m)
// Space Complexity  = O (nm);
const maximalRectangle = m => {
  if (m.length === 0) return 0;
  if (m[0].length === 0) return 0;
  let maxArea = 0;

  const dp = new Array(m.length);
  
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m[0].length).fill(0);
  }

  for(let i = 0; i < m.length; i++){
    for(let j = 0; j < m[0].length; j++){
      if (m[i][j] === '1'){

        // compute the maximum width and update dp with it
        dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;

        let width = dp[i][j];

        // compute the maximum area rectangle with a lower right corner at [i, j]
        for(let k = i; k >= 0; k--){
          width = Math.min(width, dp[k][j]);
          maxArea = Math.max(maxArea, width * (i - k + 1));
        }
      }
    }
  }
  return maxArea;
}