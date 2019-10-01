import Piece from "./piece";

export default class Bishop extends Piece {

  constructor(colour) {
    super("bishop", colour);
  }

  /**
   * @override
   */
  getPossibleMoves(i, j) {
    return [
      [i + 1, j + 1],
      [i + 2, j + 2],
      [i + 3, j + 3],
      [i + 4, j + 4],
      [i + 5, j + 5],
      [i + 6, j + 6],
      [i + 7, j + 7],
      [i - 1, j - 1],
      [i - 2, j - 2],
      [i - 3, j - 3],
      [i - 4, j - 4],
      [i - 5, j - 5],
      [i - 6, j - 6],
      [i - 7, j - 7],
      [i + 1, j - 1],
      [i + 2, j - 2],
      [i + 3, j - 3],
      [i + 4, j - 4],
      [i + 5, j - 5],
      [i + 6, j - 6],
      [i + 7, j - 7],
      [i - 1, j + 1],
      [i - 2, j + 2],
      [i - 3, j + 3],
      [i - 4, j + 4],
      [i - 5, j + 5],
      [i - 6, j + 6],
      [i - 7, j + 7]
    ];
  }
}