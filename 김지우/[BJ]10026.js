const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let map = input.map((v) => v.split(""));
let visited = Array.from(Array(N), () => Array(N).fill(false));
let cnt1 = 0;
let cnt2 = 0;

function bfs(y, x) {
  const queue = [[y, x]];
  visited[y][x] = true;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  while (queue.length) {
    let size = queue.length;
    // 현재 큐의 크기를 저장하여 한 레벨의 원소만 처리
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (newY >= 0 && newX >= 0 && newY < N && newX < N && !visited[newY][newX] && map[Y][X] === map[newY][newX]) {
          visited[newY][newX] = true;
          queue.push([newY, newX]);
        }
      }
    }
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      cnt1++;
    }
  }
}
visited = Array.from(Array(N), () => Array(N).fill(false));
map = input.map((v) => v.split("").map((a) => (a === "R" ? "G" : a)));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      cnt2++;
    }
  }
}
console.log(cnt1, cnt2);
