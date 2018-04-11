/*
There is a rabbit that starts in the middle of an n x m matrix, n > 0, m > 0.
Each element of a matrix is an integer representing points gained for being 
on thespot. 

If there are multiple possible "middles" then choose the one which has the 
highest point value to start on. 

On each iteration, the rabbit can move up, left, right, or down. 

The rabbit will always move to the next spot with the highest point value 
and will "consume" those points (set the point value in that position to 0). 
The rabbit stops when all positions around it are 0s. Calculate how many points 
the rabbit will score for a given m x n matrix.

*/

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

const getHighestMiddleSpot = (spots, matrix) => {
  return spots.reduce((maxCenterPoints, spot) => {
    let value = matrix[spot[0]][spot[1]];
    if (value > maxCenterPoints.value 
      || value === 0 && maxCenterPoints.spot[0] === -1) {
      maxCenterPoints.spot = spot;
      maxCenterPoints.value = value;
    }
    return maxCenterPoints;
  }, { value: 0, spot: [-1, -1] });
};

const hungryRabbit = (matrix) => {
 // i: a matrix with values representing points
 // o: number - max points scored
 // c: none
 // e: even/odd number of rows or columns, reach the end of the grid
 // Assumption: Can mutate matrix

  // Function to calculate all the middle spots
  const allCenters = getMatrixCenters(matrix);
  const highestCenter = getHighestMiddleSpot(allCenters, matrix);
  if (highestCenter.spot[0] === -1) {
    return 0;
  }

  // helper function to find current highest
  const calculateGreater = (row, column, max) => {
    let current = matrix[row][column];
    if (current > max.points) {
      max.points = current;
      max.position = [row, column];
    }
    return max;
  };

  // helper function to find highest among all four sides
  const calculateNeighboringPoints = (row, column, ) => {
    let max = { points: 0, position: [-1, -1] };
    max = matrix[row - 1] ? calculateGreater(row - 1, column, max) : max;
    max = matrix[row][column - 1] ? calculateGreater(row, column - 1, max) : max;
    max = matrix[row + 1] ? calculateGreater(row + 1, column, max) : max;
    max = matrix[row][column + 1] ? calculateGreater(row, column + 1, max) : max;
    return max;
  };

  let points = highestCenter.value;
  matrix[highestCenter.spot[0]][highestCenter.spot[1]] = 0;

  let row = highestCenter.spot[0];
  let column = highestCenter.spot[1];

  // recursive function call
  const findMaxPoints = (row, column) => {
    let nextMax = calculateNeighboringPoints(row, column);
    if (nextMax.points !== 0) {
      points += nextMax.points;
      matrix[nextMax.position[0]][nextMax.position[1]] = 0;
      return findMaxPoints(nextMax.position[0], nextMax.position[1]);
    }
    return points;
  };
  
  return findMaxPoints(row, column);
}

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


console.log(hungryRabbit(x)); // 30
console.log(hungryRabbit(y)); // 36
console.log(hungryRabbit(z)); // 0
console.log(hungryRabbit(a)); // 5
console.log(hungryRabbit(b)); // 9
console.log(hungryRabbit(c)); // 24