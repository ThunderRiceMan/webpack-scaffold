import Piece from "./piece";

export default class Queen extends Piece {

  constructor(colour) {
    super("queen", colour);
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
      [i - 7, j + 7],
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