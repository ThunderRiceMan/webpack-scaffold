export default class Piece {

  constructor(name, colour) {
    this._name = name;
    this._colour = colour;
  }

  getDisplayName() {
    return this._colour + this._name;
  }

  getPossibleMoves() {
    throw Error("Not implemented");
  }

}