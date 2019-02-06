/*
There is a rabbit that starts in the middle of an n x m matrix, n > 0, m > 0.
Each element of a matrix is an integer representing points gained for being 
on the spot. 

If there are multiple possible "middles" then choose the one which has the 
highest point value to start on. 

On each iteration, the rabbit can move up, left, right, or down. 

The rabbit will always move to the next spot with the highest point value 
and will "consume" those points (set the point value in that position to 0). 
The rabbit stops when all positions around it are 0s. Calculate how many points 
the rabbit will score for a given m x n matrix.

*/

const calculateMaximumCarrots = (matrix) => {
  // i: a matrix with values representing points
  // o: number - max points scored
  // c: none
  // e: even/odd number of rows or columns, reach the end of the grid
  // Assumption: can mutate matrix and values are always 0 and above

  // Function to calculate all the middle cells
  const getMatrixCenters = (matrix) => {
    let totalRows = matrix.length;
    let totalColumns = matrix[0].length;
    let rowIsEven = totalRows % 2 === 0;
    let columnIsEven = totalColumns % 2 === 0;
    let rowCenter = Math.floor(totalRows / 2);
    let columnCenter = Math.floor(totalColumns / 2);
    const possibleCenters = [];

    // row spots to add if even length
    if (rowIsEven) {
      possibleCenters.push(r);
    }
    // column spots to add if even length
    if (columnIsEven) {
      possibleCenters.push([rowCenter, columnCenter - 1]);
      if (!rowIsEven) {
        possibleCenters.push([rowCenter, columnCenter]);
      }
    }
   
    if (rowIsEven && columnIsEven) {
      possibleCenters.push([rowCenter - 1, columnCenter - 1]);
    }
    // if odd, both are odd, only one center
    if (!rowIsEven && !columnIsEven) {
      possibleCenters.push([rowCenter, columnCenter]);
    }
    return possibleCenters;
  };

  // Function to calculate middle point with highest points
  const findMaximumValueCell = (cells) => {
    return cells.reduce((maxValueCell, position) => {
      let value = matrix[position[0]][position[1]];
      if (value > maxValueCell.value) {
        maxValueCell.row = position[0];
        maxValueCell.col = position[1];
        maxValueCell.value = value;
      }
      return maxValueCell;
    }, { value: -1, row:-1, col: -1 });
  };


  // helper function to find highest among all four sides
  const getNeighboringCells = (row, col) => {
    const cells = [];

    // check if this cell exists in the matrix
    matrix[row - 1] ? cells.push([row - 1, col]) : null;
    matrix[row][col - 1] ? cells.push([row, col - 1]) : null;
    matrix[row + 1] ? cells.push([row + 1, col]) : null;
    matrix[row][col + 1] ? cells.push([row, col + 1]) : null;
    return cells;
  };


  // iterative function call to find maximum value neighboring cell and accumulate points
  const collectPoints = () => {
    // find centers and max center value
    const possibleCenters = getMatrixCenters(matrix);
    let maxValueCell = findMaximumValueCell(possibleCenters);

    // initialize points and set centemr cell to 0
    let points = maxValueCell.value;
    matrix[maxValueCell.row][maxValueCell.col] = 0;

    // find highest neighboring cell of current maximum value cell 
    let neighboringCells = getNeighboringCells(maxValueCell.row, maxValueCell.col);
    maxValueCell = findMaximumValueCell(neighboringCells);

    // loop until we have valid values for max value cell i.e. greater than 0
    while (maxValueCell.value > 0) {
      points += maxValueCell.value;
      matrix[maxValueCell.row][maxValueCell.col] = 0;
      neighboringCells = getNeighboringCells(maxValueCell.row, maxValueCell.col);
      maxValueCell = findMaximumValueCell(neighboringCells);
    }
    return points;
  };

  return collectPoints();
};



let a = [
  [5, 7, 8, 6, 3],mamat
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8],
  [3, 2, 4, 5, 8]
];

let b = [
  [0, 0, 5, 6],
  [6, 2, 3, 0],
  [6, 8, 0, 4],
  [1, 2, 7, 4]
];

let c = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let d = [
  [0, 0, 0],
  [0, 5, 0],
  [0, 0, 0]
]

let e = [
  [0, 3, 0],
  [4, 0, 9],
  [0, 6, 0]
];
let f = [
  [0, 3, 0, 5],
  [4, 0, 9, 7],
  [0, 6, 0, 8]
];

let g = [
  [1]
];

let h = [
  [1, 2],
  [0, 3]
];

let i = [
  [1, 2, 3],
  [6, 0, 8]
]


console.log(calculateMaximumCarrots(a)); // 30
console.log(calculateMaximumCarrots(b)); // 36
console.log(calculateMaximumCarrots(c)); // 0
console.log(calculateMaximumCarrots(d)); // 5
console.log(calculateMaximumCarrots(e)); // 9
console.log(calculateMaximumCarrots(f)); // 24
console.log(calculateMaximumCarrots(g)); // 1
console.log(calculateMaximumCarrots(h)); // 6
console.log(calculateMaximumCarrots(i)); // 13