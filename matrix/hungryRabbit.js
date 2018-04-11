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

const calculateMaximumPoints = (matrix) => {
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
      possibleCenters.push([rowCenter, columnCenter], [rowCenter - 1, columnCenter]);
    }
    // column spots to add if even length
    if (columnIsEven) {
      possibleCenters.push([rowCenter, columnCenter - 1]);
      if (!rowIsEven) {
        possibleCenters.push([rowCenter, columnCenter]);
      }
    }
    // additional spots to add if both are even
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
        maxValueCell.position = position;
        maxValueCell.value = value;
      }
      return maxValueCell;
    }, { value: -1, position: [-1, -1] });
  };


  // helper function to find highest among all four sides
  const getNeighboringCells = (row, column) => {
    let cells = [];
    matrix[row - 1] ? cells.push([row - 1, column]) : null;
    matrix[row][column - 1] ? cells.push([row, column - 1]) : null;
    matrix[row + 1] ? cells.push([row + 1, column]) : null;
    matrix[row][column + 1] ? cells.push([row, column + 1]) : null;
    return cells;
  };


  // recursive function call to find largest neighboring cells and accumulate points
  const findMaximumPoints = (row, column) => {
    const neighboringCells = getNeighboringCells(row, column);
    const nextMaxCell = findMaximumValueCell(neighboringCells);
    if (nextMaxCell.value > 0) {
      points += nextMaxCell.value;
      matrix[nextMaxCell.position[0]][nextMaxCell.position[1]] = 0;
      return findMaximumPoints(nextMaxCell.position[0], nextMaxCell.position[1]);
    }
    return points;
  };

  // Use all functions above to calculate maximum points

  // find centers and max center value
  const possibleCenters = getMatrixCenters(matrix);
  const maxValueCell = findMaximumValueCell(possibleCenters);

  // initialize points and set center cell to 0
  let points = maxValueCell.value;
  matrix[maxValueCell.position[0]][maxValueCell.position[1]] = 0;

  // find max paths using middle row and column
  let row = maxValueCell.position[0];
  let column = maxValueCell.position[1];
  return findMaximumPoints(row, column);
};



let x = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8],
  [3, 2, 4, 5, 8]
];

let y = [
  [0, 0, 5, 6],
  [6, 2, 3, 0],
  [6, 8, 0, 4],
  [1, 2, 7, 4]
];

let z = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let a = [
  [0, 0, 0],
  [0, 5, 0],
  [0, 0, 0]
]

let b = [
  [0, 3, 0],
  [4, 0, 9],
  [0, 6, 0]
];
let c = [
  [0, 3, 0, 5],
  [4, 0, 9, 7],
  [0, 6, 0, 8]
];


console.log(calculateMaximumPoints(x)); // 30
console.log(calculateMaximumPoints(y)); // 36
console.log(calculateMaximumPoints(z)); // 0
console.log(calculateMaximumPoints(a)); // 5
console.log(calculateMaximumPoints(b)); // 9
console.log(calculateMaximumPoints(c)); // 24