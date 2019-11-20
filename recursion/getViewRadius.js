/*

Given a matrix with a position, find the max radius view around it

 */

const findViewRadius = (matrix, rows, cols, position) => {
  const [row, col] = position;
  let radius = 0;
  const visited = {};
  visited[`${row}${col}`] = true;
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [-1, -1], [1, 1]];
  const cells = rows * cols;

  const inBounds = (r, c) => {
    return r >= 0 && r < rows && c >= 0 && c < cols;
  }

  const getNextCells = (r, c) => {
    const result = [];
    for (let i = 0; i < directions.length; i++) {
      const [dr, dc] = directions[i];
      const nextR = r + dr;
      const nextC = c + dc;
      if (!visited[`${nextR}${nextC}`] && inBounds(nextR, nextC)) {
        result.push([nextR, nextC]);
        visited[`${nextR}${nextC}`] = true;
      }
    }
    return result;
  }

  let queue = getNextCells(row, col);
  let processed = 0;
  if (queue.length < 8) {
    return 0;
  }

  while (processed < cells) {
    let nextQueue = [];
    let currLength = queue.length;
    let clear = true;
    while (queue.length > 0) {
      const [currR, currC ] = queue.shift();
        processed++;
        clear = clear && matrix[currR][currC] === 0;
        if (!clear) {
          return radius;
        }

        nextQueue = [...nextQueue, getNextCells(currR, currC)];
    }
    radius++;
    if (nextQueue.length !== currLength * 2) {
      return radius;
    }
    queue = nextQueue;
  }
  return radius;
}
console.log(findViewRadius([
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
], 5, 5, [2, 2]))

