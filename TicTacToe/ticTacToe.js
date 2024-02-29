setupBoard = () => Array.from({ length: 3 }, () => Array(3).fill(0));

ticTacToe = (moves) => {
  let turn = 0;
  let initialRow = [0, 0, 0];
  let initialColumn = [0, 0, 0];
  let diagonal1 = false;
  let diagonal2 = false;

  const board = setupBoard();

  moves.forEach((coordinate, idx) => {
    const player = idx % 2 === 0 ? 1 : -1;
    board[coordinate[0]][coordinate[1]] = player;
  });

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      turn += board[row][column];
      initialRow[row] += board[row][column];
      initialColumn[column] += board[row][column];

      row === column && (diagonal1 += board[row][column]);
      row + column === 2 && (diagonal2 += board[row][column]);
    }
  }
  const oWinner =
    initialRow.some((row) => row === 3) ||
    initialColumn.some((column) => column === 3) ||
    diagonal1 === 3 ||
    diagonal2 === 3;
  const xWinner =
    initialRow.some((row) => row === -3) ||
    initialColumn.some((column) => column === -3) ||
    diagonal1 === -3 ||
    diagonal2 === -3;
  return oWinner
    ? "Player A"
    : xWinner
    ? "Player B"
    : moves.length === 9
    ? "Draw"
    : "Pending";
};

// console.log(
//   ticTacToe([[0,0],[2,0],[1,1],[2,1],[2,2]])
// ); // Player A
// console.log(
//   ticTacToe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])
// ); // Player B
// console.log(
//   ticTacToe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])
// ); // Game ends in a draw

// console.log(ticTacToe([[0,0],[1,1],[0,1],[0,2]])) //Game is pending
module.exports = ticTacToe;