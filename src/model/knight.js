import Piece from "./piece";

export default class Knight extends Piece {

  constructor(colour) {
    super("knight", colour);
  }

  /**
   * @override
   */
  getPossibleMoves(i, j) {
    return [
      [i + 2, j + 1],
      [i + 2, j - 1],
      [i - 2, j + 1],
      [i - 2, j - 1],
      [i + 1, j + 2],
      [i - 1, j + 2],
      [i + 1, j - 2],
      [i - 1, j - 2]
    ];
  }
}