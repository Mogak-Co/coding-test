const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N] = input.shift();
let graph = input;
let visited;
let ans = [1];

// 1 ~ 100 강수량의 모든 경우 i
// graph = i 이하의 모든 곳을 0 으로 바꾼 후
// graph && !visited 이면 bfs(), cnt++
// ans.push(cnt)
// Math.max(...ans)

const bfs = (Y, X) => {
  let dy = [1, -1, 0, 0];
  let dx = [0, 0, 1, -1];
  let queue = [[Y, X]];
  while (queue.length) {
    let [curY, curX] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let newY = curY + dy[i];
      let newX = curX + dx[i];
      if (newY >= 0 && newX >= 0 && newY < N && newX < N && !visited[newY][newX] && graph[newY][newX]) {
        visited[newY][newX] = true;
        queue.push([newY, newX]);
      }
    }
  }
};

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[j][k] <= i) graph[j][k] = 0;
    }
  }

  visited = Array.from(Array(N), () => Array(N).fill(false));
  let cnt = 0;

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[j][k] && !visited[j][k]) {
        bfs(j, k);
        cnt++;
      }
    }
  }
  ans.push(cnt);
}

console.log(Math.max(...ans));
