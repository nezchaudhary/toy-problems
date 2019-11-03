/*
807. Max Increase to Keep City Skyline
Medium

648

173

Favorite

Share
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.807. Max Increase to Keep City Skyline
Medium

648

173

Favorite

Share
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Time Complexity O(n^2)
// Space Complexity O(n)
const maxIncreaseKeepingSkyline = grid => {
  // find max size building top-bottom (col) // store indexes of the tallest
  // find max size building left-to-right (row)
  
  // Math.max between row and col at with value at highest building
  // count should increment by the difference between current height vs new height
  const maxHeightRows = grid.map(row => {
    let max = row[0];
    for (let i = 1; i < row.length; i++) {
      if (row[i] > max) {
        max = row[i];
      }     
    }
    return max;
  });
  
  
  const maxHeightCols = [];
  let col = 0;
  while (col < grid.length) {
    let row = 0;
    let max = grid[row][col];
      while (row < grid.length) {
        if (max < grid[row][col]) {
          max = grid[row][col];  
        }
        row++;
      }
    maxHeightCols[col] = max;
    col++;
  }
  
  let increase = 0;
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      const maxValue = Math.min(maxHeightCols[col], maxHeightRows[row]);
      increase += maxValue - grid[row][col];
    }
  }
  return increase;   
};