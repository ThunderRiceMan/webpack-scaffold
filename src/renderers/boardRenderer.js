export default class BoardRenderer {

  constructor(controller) {
    this._controller = controller;
  }

  render(container, board) {
    let size = board.getSize();
    let cellArray = [];

    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);
      cellArray.push([]);
      for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.innerText = "";
        cellArray[i][j] = cell;
        if (board.getCell(i, j) !== undefined) {
          cell.innerText = board.getCell(i, j).getDisplayName();

          cell.addEventListener("click", function () {
            for (let i = 0; i < size; i++) {
              for (let j = 0; j < size; j++) {
                cellArray[i][j].className = "cell";
              }
            }
            cell.className = "cell selected";
          });

        }
        row.appendChild(cell);
      }

    }
  }
}