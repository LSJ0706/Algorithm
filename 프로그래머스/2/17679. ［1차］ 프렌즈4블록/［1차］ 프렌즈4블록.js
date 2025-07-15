function solution(m, n, board) {
  let answer = 0;
  board = board.map((v) => v.split(""));
  while (true) {
    const clear = [];
    for (let i = 0; i<m-1; i++) {
      for (let j = 0; j<n-1; j++) {
        if (
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1] &&
          board[i][j] !== 0
        )
          clear.push([i, j]);
      }
    }

    if (clear.length === 0) break;

    for (let i = 0; i < clear.length; i++) {
      const [x, y] = clear[i];

      board[x][y] = 0;
      board[x + 1][y] = 0;
      board[x][y + 1] = 0;
      board[x + 1][y + 1] = 0;
    }

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j] != 0) {
                board[i][j] = board[k][j];
                board[k][j] = 0;
                break;
            }
          }
        }
      }
    }
  }
  answer = board.flat().filter((v) => v === 0).length;
  return answer;
}