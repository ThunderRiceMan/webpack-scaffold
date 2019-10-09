export default class BoardController {

  constructor(model) {
    this._model = model;
  }

  onCellClicked(piece, i, j) {
    let movesArray = piece.getPossibleMoves(i, j)
    this._model.setSelectedCell(piece); 
    let validMoves = []

    for (let i = 0; i < movesArray.length; i++){
      let coOrdinates = movesArray[i];
      if (this._model.getPiece(coOrdinates[0], coOrdinates[1]) === undefined){
        validMoves.push(coOrdinates);
      }
    }
   

    this._model.setValidMoves(validMoves);
  }
}