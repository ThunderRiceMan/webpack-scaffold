var board = [];
for (let i = 0; i < 8; i++) {
    board[i] = [];
}
function populateBoard(board){
    populateSpecialPieces(board, 0, "w");
    populatePawns(board, 1, "w")
    populateSpecialPieces(board, 7, "b");
    populatePawns(board, 6, "b")
}
function populateSpecialPieces(board, row, colour){
    board[row][0] = colour + "rook";
    board[row][1] = colour + "knight";
    board[row][2] = colour + "bishop";
    board[row][3] = colour + "queen";
    board[row][4] = colour + "king";
    board[row][5] = colour + "bishop";
    board[row][6] = colour + "knight";
    board[row][7] = colour + "rook";
}
function populatePawns(board, row, colour){
    for (let i = 0; i <8; i++){
        board[row][i] = colour + "pawn";
    }
}
populateBoard(board);
console.log(board);