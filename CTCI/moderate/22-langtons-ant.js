/*
Langton's Ant: An ant is sitting on a infinite grid of white and black squares. Initially, the grid is all white and the ant faces right. At each step, it does the following:
(1) At a white square, flip the color of the square, turn 90 degrees right (clockwise), and move forward one unit.
(2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move forward one unit.

Write a program to simulate the first K moves that the ant makes and print the final board as a grid. Nod e that you  are not provided with the data structure ti represent the grid. This is something you must design yourself. The only input to your method is K. You should print the final grid and return nothing. The method signature might be something like void printKMoves(int k)

*/

// Doubling the size of the array is one solution but it has complications wwhen you need to expand left

// Having a hash map of white squares is probably the best solution


class Position {
  constructor(x, y) {
    this.row = x;
    this.col = y;
  }

  equals(obj) {
    if \
  }
}

class Board {
  constructor() {
    this.whites = {};
    this.ant = new this.ant();
    this.topLeftCorner = new Position(0, 0);
    this.bottomRightCorner = new Position(0, 0);

    move() {

    }

    flip() {

    }

    ensureFit() {

    }

    isWhite() {

    }


  }
}