import Piece from "./piece";

export default class Pawn extends Piece {

  constructor(colour) {
    super("pawn", colour);
  }

  /**
   * @override
   */
  getPossibleMoves(i, j) {
    if (this._colour === "w"){
      return [[i + 1, j]];
    }
    else {
      return [[i - 1, j]];
    }
  }
}