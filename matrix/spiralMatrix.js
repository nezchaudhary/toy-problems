/*

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

// Time Complexity O(n)
// Space Complexity O(n)
const spiralOrder = (matrix) => {
  if (!matrix.length) return [];
  if (matrix[0].length === 0) return [];
  const result = [];
  
  let rt = 0;
  let rb = matrix.length - 1;
  let cl = 0;
  let cr = matrix[0].length - 1;
  
  while (rt <= rb && cl <= cr) {
      for (let c = cl; c <= cr; c++) result.push(matrix[rt][c]); 
      for (let r = rt + 1; r <= rb; r++) result.push(matrix[r][cr]);
      
      if (rt < rb && cl < cr) {
          for (let c = cr - 1; c > cl; c--) result.push(matrix[rb][c]);
          for (let r = rb; r > rt; r--) result.push(matrix[r][cl]);
      }
      rt++;
      rb--;
      cl++;
      cr--;
  }
  return result;
  
  
};