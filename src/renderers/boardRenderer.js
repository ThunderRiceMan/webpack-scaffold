export default class BoardRenderer {

  constructor(controller, model) {
    this._controller = controller;
    this._model = model;
    this._cellElements = [];

    this._model.on("selected cell", this._onCellSelected.bind(this));
    this._model.on("valid moves changed", this._onValidMovesChanged.bind(this));
  }

  resetBoard() {
    let size = this._model.getSize();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this._cellElements[i][j].className = "cell";
      }
    }
  }

  initDom(container) {
    let size = this._model.getSize();
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);
      this._cellElements.push([]);
      for (let j = 0; j < size; j++) {
        let cellElement = document.createElement("div");
        cellElement.className = "cell";
        this._cellElements[i][j] = cellElement;
        let piece = this._model.getPiece(i, j);
        if (piece !== undefined) {
          cellElement.innerText = piece.getDisplayName();
          cellElement.addEventListener("click", this._onCellClicked.bind(this, piece, i, j));
        }
        row.appendChild(cellElement);
      }
    }
  }

  render(container) {
    
  }

  _onCellClicked(piece, i, j) {
    this.resetBoard()
    this._controller.onCellClicked(piece, i, j);
  }

  _onCellSelected(piece) {
    let size = this._model.getSize();

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (this._model.getPiece(i, j) === piece) {
          this._cellElements[i][j].className = "cell selected";
        }
      }
    }
  }

  _onValidMovesChanged(moves){
    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
      if (move[0] >= 0 && move[1] >= 0 && move[0] < 8 && move[1] <8) {
        this._cellElements[move[0]][move[1]].className = "cell possible";
      }
    }
  }

}