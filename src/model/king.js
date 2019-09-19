import Piece from "./piece";

export default class King extends Piece {

  constructor(colour) {
    super("king", colour);
  }

  /**
   * @override
   */
  getPossibleMoves(i, j) {
    return [
      [i + 1, j],
      [i + 1, j + 1],
      [i, j + 1],
      [i - 1, j + 1],
      [i - 1, j],
      [i - 1, j - 1],
      [i, j - 1],
      [i + 1, j - 1]
    ];
  }
}