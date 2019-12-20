/*

1198. Find Smallest Common Element in All Rows
Medium

42

4

Favorite

Share
Given a matrix mat where every row is sorted in increasing order, return the smallest common element in all rows.

If there is no common element, return -1.

Example 1:

Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
Output: 5

Constraints:

1 <= mat.length, mat[i].length <= 500
1 <= mat[i][j] <= 10^4
mat[i] is sorted in increasing order.

*/


var smallestCommonElement = function(matrix) {
  if (!matrix.length || !matrix[0].length) return -1;
  
  let rows = matrix.length;
  let rowLength = matrix[0].length;
  let smallest = matrix[0][0];
  let smallestRow = 0;
  let largest = matrix[0][rowLength - 1];
  let largestRow = 0;
  
  
  // get smallest and largest values and their rowIndex
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] < smallest) {
      smallest = matrix[i][0];
      smallestRow = i;
    }
    
    if (matrix[i][rowLength - 1] < largest) {
      largest = matrix[i][rowLength - 1];
      largestRow = i;
    }
  }
  
  
  let rangeIndex = 0;
  
  if (largest > smallestRow[rowLength - 1]) {
    rangeIndex = rowLength;
  } else {
    for (let i = 0; i < matrix[smallestRow].length; i++) {
      if (largest <= matrix[smallestRow][i]) {
        rangeIndex = i + 1;
        break;
      }
    }
  }
  
  
  const binarySearch = (row, target) => {
    let low = 0;
    let high = rowLength - 1;

    if (target === row[rowLength - 1]) {
      return true;
    } else if (row[0] > target) {
      return false;
    }

    let mid = Math.floor((low + high) / 2);
    
    while (low < high) {
      if (row[mid] === target) {
        return true;
      } else if (row[mid] > target) {
        high = mid;
      } else if (row[mid] < target) {
        low = mid + 1;
      }
      mid = Math.floor((low + high) / 2);
    }
    return false;
  }
  
  let curr = 0;
  while (curr < rangeIndex) {
    let value = matrix[smallestRow][curr];
    let found = 1;
    let row = 0;
    while (row < rows) {
      if (row === smallestRow) {
        row++;
          continue;
      } else {
        if (binarySearch(matrix[row], value)) {
          found++;
        } else {
          break;  
        }
        row++;
      }    
    }

    if (found === matrix.length) {
        return value;
    }
    curr++;
  }
  
  return -1;
  
};

console.log(smallestCommonElement([[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]));
console.log(smallestCommonElement(
  [ [10,2075,2700,3884,5017,6177,6829,8294,8695,9263],
    [262,889,1873,2700,5413,6039,6491,6501,7525,8294],
    [1348,1504,2950,6107,6747,7003,8294,8355,8601,9412],
    [2616,4624,5788,6115,7401,7461,7525,7840,7886,8294],
    [1739,2002,4239,5151,5238,6190,6848,7238,7722,8294],
    [4118,4551,5470,6114,7672,7975,8294,8971,9080,9656],
    [195,2418,5963,6151,7720,7865,8294,8417,8729,9852],
    [1195,2657,3608,4285,5154,5299,5497,6960,8125,8294],
    [511,934,3065,3227,3290,3988,4969,7846,8294,9228],
    [641,1489,2888,3727,4453,5527,6146,6459,8294,9567]
  ])); // 8294
