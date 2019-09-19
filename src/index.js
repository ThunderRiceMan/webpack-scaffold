import Board from "./model/board";
import BoardRenderer from "./renderers/boardRenderer";

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let board = new Board();
let boardRenderer = new BoardRenderer();

boardRenderer.render(container, board);