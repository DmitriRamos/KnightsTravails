import chalk from "chalk";
import { ChessBoard } from "./chessboard/board";
const board = new ChessBoard();

console.log(board.printBoard("e7", "e2"));
