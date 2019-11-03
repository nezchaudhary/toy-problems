/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */


// 1 x 1 board
// [[false],
// ]


// 2 x 2 board
//[ [false, false],
//  [false, false],
// ]


// 3 x 3 board

// [[false, false, false],
//  [false, false, false],
//  [false, false, false],
// ]


// 5 x 5 board
// [ [false, false, false, false, false],
//   [false, false, false, false, false],
//   [false, false, false, false, false],
//   [false, false, false, false, false],
//   [false, false, false, false, false]
// ]

// A Board class will be useful

var makeBoard = function (n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function (n) {
  let count = 0;
  //base case is if we hit the bottom right
  const board = makeBoard(n);
  let i = 0;
  let j = 0;
  board.togglePiece(i, j);
  //keep track of solution count
  //top left is (grid[0][0])
  //bottom right is grid[4][4]

  function loop(i, j) {

    if (i === (n - 1) && j === (n - 1)) {
      count++;
      return;
    } else {

      if ((i + 1) < n && !board.hasBeenVisited(i + 1, j)) {
        //possible solution
        board.togglePiece(i + 1, j);
        loop(i + 1, j);
        board.togglePiece(i + 1, j)
      }

      if ((j + 1) < n && !board.hasBeenVisited(i, j + 1)) {
        //possible solution
        board.togglePiece(i, j + 1);
        loop(i, j + 1);
        board.togglePiece(i, j + 1);
      }

      if ((i - 1) > -1 && !board.hasBeenVisited(i - 1, j)) {
        board.togglePiece(i - 1, j);
        loop(i - 1, j);
        board.togglePiece(i - 1, j);
      }

      if ((j - 1) > -1 && !board.hasBeenVisited(i, j - 1)) {
        board.togglePiece(i, j - 1);
        loop(i, j - 1);
        board.togglePiece(i, j - 1);
      }
    }
  }

  loop(i, j);

  return count;

  //top left is (grid[0][0])
  //top is grid[0][j]
  //left is grid[i][0]
  //right is grid[i][4]
  //bottom is grid[4][j]
  //bottom right is grid[4][4]

  ///check which positions are viable
  //from top left 
  //if (i === 0)
  ///we are at max top
  //if (j === 0) 
  //we are at the max left
  // if ( j === 4)
  //we are at max right
  //if (i === 4)
  //we are at max bottom

  //as long as we are within those co-ordinates
  // we can move around
  // while (0 < i < 5 && 0 < j < 5) {
  //at top left
  //we are already max left and top left so make check if the possible positions are not off the board
  // if (i + 1 < 5 && that position is false) moving down
  //its a possible solution
  // check the position on the right
  //check position below

  //move
  //if we reach (4, 4)
  // we have a solution
  //else we keep moving

  //top is ()
  // n is the grid size
  //keep track of position on board

  //
};

console.log(robotPaths(1)); // 1
console.log(robotPaths(2)); // 2
console.log(robotPaths(3)); // 12
console.log(robotPaths(4)); // 184
console.log(robotPaths(5)); // 8512
