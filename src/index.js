import Board from "./model/board";
import BoardRenderer from "./renderers/boardRenderer";
import BoardController from "./controller/boardController";

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let board = new Board();
let boardController = new BoardController(board);
let boardRenderer = new BoardRenderer(boardController);

boardRenderer.render(container, board);