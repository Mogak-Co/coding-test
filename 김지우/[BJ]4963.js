const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let graph, visited, W, H;

const howManyIslands = () => {
  let ans = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && graph[i][j]) {
        ans++;
        bfs(i, j);
      }
    }
  }
  console.log(ans);
};

// BFS
const bfs = (Y, X) => {
  let dy = [1, 1, 1, 0, 0, -1, -1, -1];
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const queue = [[Y, X]];
  while (queue.length) {
    const [curY, curX] = queue.shift();

    for (let i = 0; i < 8; i++) {
      let newY = curY + dy[i];
      let newX = curX + dx[i];

      if (newY >= 0 && newX >= 0 && newY < H && newX < W && !visited[newY][newX] && graph[newY][newX]) {
        visited[newY][newX] = true;
        queue.push([newY, newX]);
      }
    }
  }
};

for (let idx = 0; idx < input.length - 1; idx++) {
  [W, H] = input[idx];
  graph = input.slice(idx + 1, idx + H + 1);
  idx += H;
  visited = Array.from(Array(H), () => Array(W).fill(false));

  howManyIslands();
}
