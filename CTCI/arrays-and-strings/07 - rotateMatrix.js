/*

CTCI - 1.7 
Rotate Matrix 
Given an image represented by an N x N matrix, where each pixel in the image is 4bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

[
  [5,15, 13, 2],
  [1, 14, 3, 4],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

*/

// const rotateMatrix = (matrix) => {
//   if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
//   let len = matrix.length;

//   for (let r = 0; r < len / 2; r++) {
//     let lastRow = len - 1 - r;
//     for (let c = r; c < last; c++) {
//       let offset = c - r;
//       let top = matrix[r][c];
//       matrix[r][c] = matrix[lastRow - offset][r];
//       matrix[lastRow - offset][r] = matrix[lastRow][lastRow - offset];
//       matrix[lastRow][lastRow - offset] = matrix[c][lastRow];
//       matrix[c][lastRow] = top;
//     }
//   }
//   return matrix;
// }

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Time Complexity O (n^2)
// Transpose and then reverse
// Runtime: 60 ms, faster than 34.45% of JavaScript online submissions for Rotate Image.
// Memory Usage: 35.9 MB, less than 10.53% of JavaScript online submissions for Rotate Image.
const rotateTransposeAndReverse = matrix => {
  for (let col = 0; col < matrix.length; col++) {
    for (let row = col; row < matrix.length; row++) {
      [matrix[col][row], matrix[row][col]] = [matrix[row][col], matrix[col][row]];
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      const temp = matrix.length - j - 1;
      [matrix[i][j], matrix[i][temp]] = [matrix[i][temp], matrix[i][j]];
    }
  }
  return matrix;
};

//Runtime: 56 ms, faster than 60.35% of JavaScript online submissions for Rotate Image.
// Memory Usage: 33.9 MB, less than 31.58% of JavaScript online submissions for Rotate Image.
// Time Complexity O(n^2)
// Space Complexity O(1)
// Rotate four rectangles
const rotateFourRectangles = m => {
  const n = m.length;
  const temp = new Array(4);
  
  for (let i = 0; i < Math.floor(n/2) + n % 2;  i++) {
    for (let j = 0; j < Math.floor(n/2); j++) {
      let row = i;
      let col = j;
      
      for (let k = 0; k < 4; k++) {
        temp[k] = m[row][col];
        const t = row;
        row = col;
        col = n - 1 - t;
      }
      
      for (let k = 0; k < 4; k++) {
        m[row][col] = temp[(k + 3) % 4];
        const t = row;
        row = col;
        col = n - 1 - t;
      }
    }
  }
}


//Runtime: 60 ms, faster than 34.45% of JavaScript online submissions for Rotate Image.
// Memory Usage: 33.8 MB, less than 78.95% of JavaScript online submissions for Rotate Image.
// Time Complexity O(n^2)
// Space Complexity O(1)
const rotateFourRectanglesOnePass = m => {
  const n = m.length;
  for (let i = 0; i < Math.floor((n + 1)/ 2); i++){
      for (let j = 0; j < Math.floor(n/2); j++) {
          const temp = m[n - 1 - j][i];
          m[n - 1 - j][i] = m[n - 1 - i][n - j - 1];
            m[n - 1 - i][n - j - 1] = m[j][n - 1 -i];
              m[j][n - 1 - i] = m[i][j];
              m[i][j] = temp;
      }
  }
  return m;
}

console.log(rotateTransposeAndReverse([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));