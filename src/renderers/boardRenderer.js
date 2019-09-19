export default class BoardRenderer {

  constructor(controller) {
    this._controller = controller;
  }

  render(container, board) {
    let size = board.getSize();
    let cellElements = [];

    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);
      cellElements.push([]);
      for (let j = 0; j < size; j++) {
        let cellElement = document.createElement("div");
        cellElement.className = "cell";
        cellElements[i][j] = cellElement;
        if (board.getCell(i, j) !== undefined) {
          cellElement.innerText = board.getCell(i, j).getDisplayName();

          cellElement.addEventListener("click", function () {
            for (let i = 0; i < size; i++) {
              for (let j = 0; j < size; j++) {
                cellElements[i][j].className = "cell";
              }
            }
            cellElement.className = "cell selected";
            let moves = board.getCell(i, j).getPossibleMoves(i, j);
            for (let i = 0; i < moves.length; i++) {
              let move = moves[i];
              if (move[0] >= 0 && move[1] >= 0 && move[0] < 8 && move[1] <8) {
                cellElements[move[0]][move[1]].className = "cell possible";
              }
            }
          });

        }
        row.appendChild(cellElement);
      }

    }
  }
}