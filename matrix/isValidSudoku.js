/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.

*/


const getBoxIndex = (row, col) => {
  if(row <= 2 && col <= 2) return 0;
  else if(row <= 2 && col >= 3 && col <= 5) return 1;
  else if(row <= 2 && col >= 6 && col <= 8) return 2;
  else if(row >= 3 && row <= 5 && col <= 2) return 3;
  else if(row >= 3 && row <= 5 && col >= 3 && col <= 5) return 4;
  else if(row >= 3 && row <= 5 && col >= 6 && col <= 8) return 5;
  else if(row >= 6 && row <= 8 && col <= 2) return 6;
  else if(row >= 6 && row <= 8 && col >= 3 && col <= 5) return 7;
  else if(row >= 6 && row <= 8 && col >= 6 && col <= 8) return 8;   
  return -1;
}

var isValidSudoku = function(board) {
  const rows = {};
  const columns = {};
  const boxes = {};
  
  for (let i = 0; i < 9; i++) {
      rows[i] = {};
      columns[i] = {};
      boxes[i] = {};
  }
  
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const value = board[i][j];
          const boxIndex = getBoxIndex(i, j);
          if (value !== '.' ) {
              rows[i][value] ? rows[i][value]++ : rows[i][value] = 1;
              columns[j][value] ? columns[j][value]++ : columns[j][value] = 1;
              boxes[boxIndex][value] ? boxes[boxIndex][value]++ : boxes[boxIndex][value] = 1;
          }
          
          if (rows[i][value] > 1 || columns[j][value] > 1 || boxes[boxIndex][value] > 1) {
              return false;
          }
      }
  }
  return true;
};

console.log(isValidSudoku(
  [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
));