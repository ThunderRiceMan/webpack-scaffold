import Board from "./model/board";
import BoardRenderer from "./renderers/boardRenderer";
import BoardController from "./controller/controller";

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let model = new Board();
let boardController = new BoardController(model);
let boardRenderer = new BoardRenderer(boardController, model);

boardRenderer.initDom(container);
