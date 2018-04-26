class Game2048 {
  constructor(size) {
    this._board = this.initializeBoard(size);
    this._spaces = size * size;
    this.size = size;

  }

  initializeBoard(size) {
    let result = [];
    for (let i = 0; i < size; i++) {
      let row = new Array(size).fill(0);
      result.push(row);
    }
    return result;
  }

  generateRandomNumber(n) {
    
  }

  move() {

  }

  reset() {
    this._board = this.initializeBoard(this._size);
  }

  board() {
    return this._board;
  }
}

let game = new Game2048(4);
// console.log('game', game.board());
