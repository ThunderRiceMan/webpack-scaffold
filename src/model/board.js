import King from "./king";
import Piece from "./piece";

export default class Board {

  constructor() {
    this._board = [];
    for (let i = 0; i < 8; i++) {
      this._board[i] = [];
    }
    this._populateBoard(this._board);
  }
  
  getCell(i, j) {
    return this._board[i][j];
  }

  getSize() {
    return this._board.length;
  }

  getSelectedCell(){
    return this._selectedCell;
  }

  setSelectedCell(i, j) {
    this._selectedCell = {
      i: i,
      j: j
    };
  }

  _populateBoard(board) {
    this._populateSpecialPieces(board, 0, "w");
    this._populatePawns(board, 1, "w");
    this._populateSpecialPieces(board, 7, "b");
    this._populatePawns(board, 6, "b");
  }

  _populateSpecialPieces(board, row, colour) {
    board[row][0] = new Piece("rook", colour);
    board[row][1] = new Piece("knight", colour);
    board[row][2] = new Piece("bishop", colour);
    board[row][3] = new Piece("queen", colour);
    board[row][4] = new King(colour);
    board[row][5] = new Piece("bishop", colour);
    board[row][6] = new Piece("knight", colour);
    board[row][7] = new Piece("rook", colour);
  }

  _populatePawns(board, row, colour) {
    for (let i = 0; i < 8; i++) {
      board[row][i] = new Piece("pawn", colour);
    }
  }
}