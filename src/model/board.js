export default class Board {

    constructor() {
        this._board = [];
        for (let i = 0; i < 8; i++) {
            this._board[i] = [];
        }
        this._populateBoard(this._board);
    }

    _populateBoard(board) {
        this._populateSpecialPieces(board, 0, "w");
        this._populatePawns(board, 1, "w")
        this._populateSpecialPieces(board, 7, "b");
        this._populatePawns(board, 6, "b")
    }

    _populateSpecialPieces(board, row, colour) {
        board[row][0] = colour + "rook";
        board[row][1] = colour + "knight";
        board[row][2] = colour + "bishop";
        board[row][3] = colour + "queen";
        board[row][4] = colour + "king";
        board[row][5] = colour + "bishop";
        board[row][6] = colour + "knight";
        board[row][7] = colour + "rook";
    }

    _populatePawns(board, row, colour) {
        for (let i = 0; i < 8; i++) {
            board[row][i] = colour + "pawn";
        }
    }
}