const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
let map = input.map((v) => v.split(" ").map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(false));
let cnt = 0;
let starts = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j]) {
      starts.push([i, j]);
      visited[i][j] = true;
    }
  }
}
let queue = starts;

function bfs() {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  while (queue.length) {
    let size = queue.length;
    let newQueue = []; // 큐를 복사 초기화 할 필요 없이 다음 단계를 바로 준비
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue[i];
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (newY >= 0 && newX >= 0 && newY < N && newX < M && !visited[newY][newX] && map[newY][newX] === 0) {
          visited[newY][newX] = true;
          map[newY][newX] = 1;
          newQueue.push([newY, newX]);
        }
      }
    }
    if (newQueue.length === 0) {
      return;
    }
    cnt++;
    queue = newQueue;
  }
}

bfs();

let ans = map.flat().includes(0) ? -1 : cnt;
console.log(ans);
