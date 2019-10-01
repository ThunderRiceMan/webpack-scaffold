import Piece from "./piece";

export default class Rook extends Piece {

  constructor(colour) {
    super("rook", colour);
  }

  /**
   * @override
   */
  getPossibleMoves(i, j) {
    return [
      [i + 1, j],
      [i + 2, j],
      [i + 3, j],
      [i + 4, j],
      [i + 5, j],
      [i + 6, j],
      [i + 7, j],
      [i - 1, j],
      [i - 2, j],
      [i - 3, j],
      [i - 4, j],
      [i - 5, j],
      [i - 6, j],
      [i - 7, j],
      [i, j + 1],
      [i, j + 2],
      [i, j + 3],
      [i, j + 4],
      [i, j + 5],
      [i, j + 6],
      [i, j + 7],
      [i, j - 1],
      [i, j - 2],
      [i, j - 3],
      [i, j - 4],
      [i, j - 5],
      [i, j - 6],
      [i, j - 7]
    ];
  }
}