const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const I = +input.shift();
  const [startY, startX] = input.shift().split(" ").map(Number);
  const [endY, endX] = input.shift().split(" ").map(Number);
  const result = bfs(I, startY, startX, endY, endX);
  console.log(result);
}

function bfs(I, startY, startX, endY, endX) {
  const dy = [2, 2, -2, -2, 1, 1, -1, -1];
  const dx = [1, -1, 1, -1, 2, -2, 2, -2];
  const visited = Array.from(Array(I), () => Array(I).fill(false));
  const queue = [];
  queue.push([startY, startX, 0]);
  visited[startY][startX] = true;

  while (queue.length) {
    const [y, x, cnt] = queue.shift();
    if (y === endY && x === endX) return cnt;
    for (let i = 0; i < 8; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && nx >= 0 && ny < I && nx < I && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx, cnt + 1]);
      }
    }
  }
}
