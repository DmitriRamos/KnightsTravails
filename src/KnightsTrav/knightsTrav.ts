import { ChessBoard } from "../chessboard/board";
import { BreadthFirst } from "../shortestpath/bfs";
const board = new ChessBoard();
const bfs = new BreadthFirst();
/**
 *
 * @param pos A string of your starting position Ex. "d3"
 * @param pog A string of your finishing position Ex. "b2"
 * @returns
 */
const knightsTrav = (pos: string, pog: string) => {
  board.printBoard(pos, pog);
  return bfs.breadthFirstSearch(pos, pog);
};

export { knightsTrav };
