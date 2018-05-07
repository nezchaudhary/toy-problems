/*

*/

const numberOfIslands = (matrix) => {
  if (!matrix) return 0;
  const rowLength = matrix.length;
  if (rowLength === 0) return 0;
  const colLength = matrix[0].length;

  const visited = [];

  for (let i = 0; i < rowLength; i++) {
    visited[i] = new Array(colLength).fill(false);
  }

  let count = 0;

  const traverse = (row, col) => {
    if ((row >= 0 && row < rowLength) && (col >= 0 && col < colLength) 
        && matrix[row][col] === 1 && !visited[row][col]) {
      
      visited[row][col] = true;
      traverse(row + 1, col);
      traverse(row, col + 1);
      traverse(row - 1, col);
      traverse(row, col - 1);
    }
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 1 && !visited[row][col]) {
        count++;
        traverse(row, col);
      }
    }
  }
  return count;

};

const island1 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
]

console.log(numberOfIslands(island1));
