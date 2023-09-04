const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let map = input.map((v) => v.split("").map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(false));
let ans = 0;

function bfs(y, x) {
  const queue = [[y, x]];
  while (queue.length) {
    ans++;
    const size = queue.length;
    // 현재 큐의 크기를 저장하여 한 레벨의 원소만 처리
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      if (visited[Y][X]) continue;
      map[Y][X] = 0;
      visited[Y][X] = true;
      if (Y > 0 && map[Y - 1][X] === 1) queue.push([Y - 1, X]);
      if (X > 0 && map[Y][X - 1] === 1) queue.push([Y, X - 1]);
      if (Y < N - 1 && map[Y + 1][X] === 1) queue.push([Y + 1, X]);
      if (X < M - 1 && map[Y][X + 1] === 1) queue.push([Y, X + 1]);
      if (Y === N - 1 && X === M - 1) return ans;
    }
  }
}
bfs(0, 0);
console.log(ans);
