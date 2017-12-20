const rotateMatrix = (matrix) => {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  let len = matrix.length;

  for (let i = 0; i < len/2; i++) {
    let last = len - 1 - i;
    for (let j = i; j < last; j++) {
      let offset = j - i;
      let top = matrix[i][j];
      matrix[i][j] = matrix[last - offset][i];
      matrix[last - offset][i] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[j][last];
      matrix[j][last] = top;
    }
  }
  return matrix;
}

console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));