// If a matrix has a 0, turn the column and row with 0 into 0s.

const zeroMatrix = (matrix) => {
  let axisX = [];
  let axisY = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        axisX.push(i);
        axisY.push(j);
      }
    }
  }
  axisX.forEach(x => matrix[x].fill(0));

  for (let k = 0; k < matrix.length; k++) {
    for (let l = 0; l < axisY.length; l++) {
      matrix[k][axisY[l]] = 0;
    }
  }
  return matrix;
}

console.log(zeroMatrix([[1, 2, 0, 4, 5], [6, 7, 8, 0, 9], [10, 11, 12, 13, 14]]));