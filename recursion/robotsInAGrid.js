/*

CTCI: 8.2 - Imagine a robot  sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are 'off limits such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.

*/

// Time Complexity O (rc) where r is the rows and c is the columns. Like n^2
const getPath = maze => {
  if (maze === null || maze.length === 0) return null;
  const path = [];
  const failedPoints = {};

  const getPathToEnd = (maze, row, col, path, failedPoints) => {
    if (row < 0 || col < 0 || !maze[row][col]) {
      return false;
    }

    if (failedPoints[`${row},${col}`]) {
      return false;
    }

    const isAtOrigin = row === 0 && col === 0;

    if (isAtOrigin || getPathToEnd(maze, row, col - 1, path, failedPoints) || getPathToEnd(maze, row - 1, col, path, failedPoints)) {
      path.push([row, col]);
      return true;
    }

    failedPoints[`${row},${col}`] = true;
    return false;
  }


  if (getPathToEnd(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
    return path;
  }
  return null;
}
