export default class BoardController {

  constructor(model) {
    this._model = model;
  }

  onCellClicked(piece, i, j) {
    this._model.setSelectedCell(piece); 
    this._model.setValidMoves(piece.getPossibleMoves(i, j));
  }
}