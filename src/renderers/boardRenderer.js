export default class BoardRenderer {

    render(container, board) {
        let size = board.getSize();

        for (let i = 0; i < size; i++) {
            let row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
            for (let j = 0; j < size; j++) {
                let cell = document.createElement("div");
                cell.className = "cell";

                if (board.getCell(i, j) !== undefined) {
                    cell.innerText = board.getCell(i, j);
                }

                row.appendChild(cell);
            }
        }

    }
}