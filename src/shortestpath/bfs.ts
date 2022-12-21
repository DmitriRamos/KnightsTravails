import { connected } from "process";

export class BreadthFirst {
  getIndex(element: any): undefined | string {
    let board: any = [
      ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
      ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
      ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
      ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
      ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
      ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
      ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
      ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === element) {
          return `[${i}][${j}]`;
        }
      }
    }
  }

  getConnectedNodes(node: string | undefined): string[] | string | undefined {
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

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === node) {
          let conNodes: any = [];
          const posNodes = [
            board?.[i - 1]?.[j - 2],
            board?.[i - 1]?.[j + 2],
            board?.[i + 1]?.[j - 2],
            board?.[i + 1]?.[j + 2],
            board?.[i - 2]?.[j - 1],
            board?.[i - 2]?.[j + 1],
            board?.[i + 2]?.[j - 1],
            board?.[i + 2]?.[j + 1],
          ];
          for (let n = 0; n < 8; n++) {
            if (posNodes?.[n] != undefined) {
              conNodes.push(posNodes?.[n]);
            }
            if (conNodes === undefined) {
              return "Undefined";
            }
          }

          return conNodes;
        }
      }
    }
  }

  breadthFirstSearch(startpos: string, goalpos: string) {
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
    let flatB = board.flat();
    if (flatB.includes(startpos) === false) {
      return "Starting node is not part of the board.";
    }
    if (flatB.includes(goalpos) === false) {
      return "Finishing node is not part of the board.";
    }
    const previous = new Map();
    const shortPath = [];
    const visited = new Set();
    const queue: any = [];
    queue.push({ node: startpos, dist: 0 });
    visited.add(startpos);

    while (queue.length > 0) {
      const { node, dist } = queue.shift();
      if (node === goalpos) {
        for (let p = 1; p < dist; p++) {
          let next = previous.get(goalpos);
          if (shortPath.length === 0) {
            shortPath.push(goalpos);
            shortPath.push(`${previous.get(goalpos)}➡️`);
            for (let s = 1; s < dist; s++) {
              next = previous.get(next);
              shortPath.push(`${next}➡️`);
            }
          }
        }
        shortPath.reverse();
        return `The knight can travel from ${startpos} to ${goalpos} in ${dist} turns by taking these steps ${shortPath.join(
          ""
        )}`;
      }
      let neighbours: any = this.getConnectedNodes(node);
      for (let n = 0; n < neighbours.length; n++) {
        if (!visited.has(neighbours[n])) {
          previous.set(neighbours[n], node);
          queue.push({ node: neighbours[n], dist: dist + 1 });
          visited.add(neighbours[n]);
        }
      }
    }
    return { shortestDistance: -1, previous };
  }
}
