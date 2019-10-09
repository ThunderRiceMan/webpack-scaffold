import EventEmitter from "eventemitter3";
import King from "./king";
import Rook from "./rook";
import Bishop from "./bishop";
import Knight from "./knight";
import Queen from "./queen";
import Pawn from "./pawn";

export default class Board extends EventEmitter {

  constructor() {
    super();
    this._board = [];
    for (let i = 0; i < 8; i++) {
      this._board[i] = [];
    }
    this._populateBoard(this._board);
  }
  
  getPiece(i, j) {
    return this._board[i][j];
  }

  getSize() {
    return this._board.length;
  }

  setSelectedCell(piece) {
    this.emit("selected cell", piece);
  }

  setValidMoves(possibleMoves) {
    this.emit("valid moves changed", possibleMoves);
  }

  _populateBoard(board) {
    this._populateSpecialPieces(board, 0, "w");
    this._populatePawns(board, 1, "w");
    this._populateSpecialPieces(board, 7, "b");
    this._populatePawns(board, 6, "b");
  }

  _populateSpecialPieces(board, row, colour) {
    board[row][0] = new Rook(colour);
    board[row][1] = new Knight(colour);
    board[row][2] = new Bishop(colour);
    board[row][3] = new Queen(colour);
    board[row][4] = new King(colour);
    board[row][5] = new Bishop(colour);
    board[row][6] = new Knight(colour);
    board[row][7] = new Rook(colour);
  }

  _populatePawns(board, row, colour) {
    for (let i = 0; i < 8; i++) {
      board[row][i] = new Pawn(colour);
    }
  }
}