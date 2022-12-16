import chalk from "chalk";

export class ChessBoard {
  white: string;
  black: string;
  knight: string;
  goal: string;
  constructor() {
    this.white = chalk.white("██");
    this.black = chalk.grey("██");
    this.knight = "🐴";
    this.goal = chalk.red("❌");
  }

  printBoard(pos: string, pog: string) {
    let board = [
      ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
      ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
      ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
      ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
      ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
      ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
      ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
      ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ];

    const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
    console.log(`  ${columns.join(" ")}`);
    for (let i = 0; i < 8; i++) {
      let row = "";
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === pos) {
          row += this.knight;
        } else if (board[i][j] === pog) {
          row += this.goal;
        } else {
          row += (i + j) % 2 === 0 ? this.white : this.black;
        }
      }
      console.log(`${8 - i} ${row} ${8 - i}`);
    }
    console.log(`  ${columns.join(" ")}`);
  }
}
