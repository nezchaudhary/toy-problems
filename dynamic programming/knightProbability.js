/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.


Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.
*/


/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */

const createBoard = N => {
  const board = new Array(N);
  for (let i = 0; i < N; i++) {
    board[i] = new Array(N).fill(0);
  };
  return board;
}

const inside = (r, c, n) => {
  return r >= 0 && r < n && c >= 0 && c < n;
}

// Dynamic Programming
/*

Time Complexity: O(N^2 K) where N, KN,K are defined as in the problem. We do O(1)O(1) work on each layer dp of N^2N 
2 elements, and there are K layers considered.

Space Complexity: O(N^2),the size of dp and dp2.

*/
const knightProbability = (N, K, row, col) => {
  let board = createBoard(N);
  const rMoves = [2, 2, 1, 1, -1, -1, -2 , -2];
  const cMoves = [1, -1, 2, -2, 2, -2, 1, -1];
  board[row][col] = 1;
  while (K > 0) {
    const newBoard = createBoard(N); // create a new board
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        for (k = 0; k < 8; k++){
          const currR = r + rMoves[k];
          const currC = c + cMoves[k];
          if (inside(currR, currC, N)) {
              newBoard[currR][currC] += board[r][c] / 8.0;
          }
        }
      }
    }
    board = newBoard;
    K--;
  }

  // accumulate the result
  let result = 0;
  for (let row of board) {
    for (let square of row) {
        result += square;
    }
  }
  return result;
};

console.log('knight probability', knightProbability(3, 2, 0, 0));