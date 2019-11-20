/*

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
For example, given the following triangle
[
[2],
[3,4],
[6,5,7],
[4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Solution: (DP)
Declare pathSum array with length of triangle size(). For triangle, the bottom row length is equal to the height of triangle, so use pathSum to hold the bottom row’s value, then from bottom to up, find minimum path

*/

const minimumPath = (triangle) => {
  let height = triangle.length;
  if (height === 0) return 0;
  const minSums = new Array(height);
  for (let i = 0; i < height; i++) {
    minSums[i] = new Array(height);
  }

  
  minSums[0][0] = triangle[0][0];

  for (let i = 1; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        minSums[i][j] = minSums[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        minSums[i][j] = minSums[i - 1][j - 1] + triangle[i][j];
      } else {
        minSums[i][j] = triangle[i][j] + Math.min(minSums[i - 1][j], minSums[i - 1][j - 1]);
      }
    }
  }

  let result = minSums[height - 1][0];
  for (let k = 1; k < height; k++) {
    if (minSums[height - 1][k] < result) result = minSums[height - 1][k];
  }
  return result;
}

console.log(minimumPath([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
])); // The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).