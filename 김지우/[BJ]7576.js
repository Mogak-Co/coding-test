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
    if (map[i][j] === 1) starts.push([i, j]);
  }
}
let queue = starts;

function bfs(y, x) {
  visited[y][x] = true;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (newY >= 0 && newX >= 0 && newY < N && newX < M && !visited[newY][newX] && map[newY][newX] === 0) {
          visited[newY][newX] = true;
          map[newY][newX] = 1;
          queue.push([newY, newX]);
        }
      }
    }
    cnt++;
  }
}
starts.forEach((start, i) => bfs(starts[i][0], starts[i][1]));

// 주변 네 방향의 0을 1로 바꾸기
// 레벨이 하나 깊어질 수록 cnt++
// 모든 bfs 가 종료된 후 만약 map 에 0이 남아있다면 -1 출력, 아니면 cnt를 출력

let ans = cnt > 0 ? cnt - 1 : 0;
map.forEach((v, i) => {
  if (v.includes(0)) ans = -1;
});

console.log(ans);
