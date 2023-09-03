const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
const arr = input.map((v) => v.split("").map(Number));
const visited = {};

function bfs(x, y) {
  const queue = [[x, y]];
  visited[[x, y]] = true;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  let cnt = 1;
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let X = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = X[0] + dx[j];
        let ny = X[1] + dy[j];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && arr[nx][ny] === 1 && !visited[[nx, ny]]) {
          visited[[nx, ny]] = true;
          cnt++;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return cnt;
}

const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1 && !visited[[i, j]]) answer.push(bfs(i, j));
  }
}
console.log(answer.length);
answer.sort((a, b) => a - b);
answer.forEach((v) => console.log(v));
