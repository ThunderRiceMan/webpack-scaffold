import Board from "./model/board";
import BoardRenderer from "./renderers/boardRenderer";

var container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

var board = new Board();
var boardRenderer = new BoardRenderer();

boardRenderer.render(container, board);