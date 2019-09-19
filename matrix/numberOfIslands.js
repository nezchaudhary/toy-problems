/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/
// DFS
// Time Complexity - O(M x N) where M is the number of rows and N is the number of columns
// Space Complexity - O(M, N) worst case where the grid map is filled with lands where DFS goes by M x N deep.
const numberOfIslandsDFS = (matrix) => {
  if (!matrix) return 0;
  const rowLength = matrix.length;
  if (rowLength === 0) return 0;
  const colLength = matrix[0].length;

  // const visited = [];

  // for (let i = 0; i < rowLength; i++) {
  //   visited[i] = new Array(colLength).fill(false);
  // }

  let islands = 0;

  const traverse = (row, col) => {
    if ((row >= 0 && row < rowLength) && (col >= 0 && col < colLength) 
        && matrix[row][col] === 1) {
    
      matrix[row][col] = 0;
      traverse(row + 1, col);
      traverse(row, col + 1);
      traverse(row - 1, col);
      traverse(row, col - 1);
    }
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 1) {
        islands++;
        traverse(row, col);
      }
    }
  }

  return islands;

};

// BFS
// Time Complexity - (M x N) where M is the number of rows and N is the number of columns
// Space Complexity - O (min(M, N)) because in worst case where the grid is filled with lands, the size of the queue can grow up to min(M, N)
const numberOfIslandsBFS = matrix => {
  if (!matrix) return 0;
  const rowLength = matrix.length;
  if (rowLength === 0) return 0;
  const colLength = matrix[0].length;
  let islands = 0;
  const neighbors = [];

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 1) {
        islands++;
        matrix[row][col] = 0; // mark as visited
        neighbors.push([row, col]);
        while(neighbors.length) {
          const current = neighbors.shift();
          const [nRow, nCol] = current;

          if (nRow - 1 >= 0 && matrix[nRow - 1][nCol] === 1) {
            neighbors.push([nRow - 1, nCol]);
            matrix[nRow - 1][nCol] = 0;
          }

          if (nRow + 1 < rowLength && matrix[nRow + 1][nCol] === 1) {
            neighbors.push([nRow + 1, nCol]);
            matrix[nRow + 1][nCol] = 0;
          }

          if (nCol - 1 < colLength && matrix[nRow][nCol - 1] === 1) {
            neighbors.push([nRow, nCol - 1]);
            matrix[nRow][nCol - 1] = 0;
          }


          if (nCol + 1 < colLength && matrix[nRow][nCol + 1] === 1) {
            neighbors.push([nRow, nCol + 1]);
            matrix[nRow][nCol + 1] = 0;
          }
        }
      }
    }
  }

  return islands;

};


const island1 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

const island2 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

const island3 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
];

console.log('DFS', numberOfIslandsDFS(island1));
console.log('DFS - island 3', numberOfIslandsDFS(island3));
console.log('BFS', numberOfIslandsBFS(island2));