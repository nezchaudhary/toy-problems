class Piece {
  constructor(name, move) {
    this.move = move;
    this.type = name;
  }
}

class Square {
  constructor(position) {
    this.position = position;
    this.player = null;
    this.piece = null;
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.pieces = {};
  } 
}

class ChessGame {
  constructor() {
    this.players = {
      black: new Player('black'),
      white: new Player('white')
    }
    this.moves = {
      pawn:(start, end, player, piece) => {
        let x = Number(start[0]);
        let y = Number(start[1]);
      },
        //see possibilites
        // if black he can only move down on board
        // if white, he can only move up
        // first move can be 2 steps
        // rest can be 1 step
        // diagonal if there is enemy piece there

      knight:'',
      bishop:'',
      rook:'',
      king:'',
      queen:''
    }

    this.pieces = this.createPieces();

    this.board = this._initializeGame();

    this.gameOver = {
      'black': ''
    };    
  }

  createPieces() {
    let pieces = {};
    for (let piece in this.moves) {
      pieces[piece] = new Piece(piece, this.moves[piece]);
    }
    return pieces;
  }

  _initializeGame() {
    let grid =  this._createBoard();
    this._addPieces(grid, 0, 'black', false);
    this._addPieces(grid, 1, 'black', true);
    this._addPieces(grid, 7, 'white', false);
    this._addPieces(grid, 6, 'white', true);
    return grid;
  }

  _createBoard() {
    let grid = [];
    for (let i = 0; i < 8; i++) {
      grid.push(new Array(8));
      for (let j = 0; j < grid[i].length; j++) {
        let pos = i + '' + j;
        grid[i][j] = new Square(pos);
      }
    };
    return grid;
  }

  _addPieces(board, index, player, isPawn) {
    let positions = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    let playerPieces = this.players[player].pieces;
    let pawn = 'pawn';

    for (let i = 0; i < 8; i++) {
      let square = board[index][i];
      let piece = isPawn ? pawn : positions[i];
      square.piece = piece;
      square.player = player;
      if (playerPieces[piece]) {
        playerPieces[piece][square.position] = true
      } else {
        playerPieces[piece] = {};
        playerPieces[piece][square.position] = true;
      }
    }
  }

  move(start, end, player, piece, capturedPiece) {
    
  }
}

const chess = new ChessGame();
console.log('board', chess.board);
console.log('players', chess.players);
// chess.move()