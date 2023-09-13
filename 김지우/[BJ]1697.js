const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

let visited = Array(100001).fill(false);

function bfs(x) {
  let queue = [[x, 0]];
  visited[x] = true;
  while (queue.length) {
    let [cur, level] = queue.shift();
    if (cur === K) return level;
    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = true;
        queue.push([next, level + 1]);
      }
    }
  }
}
console.log(bfs(N));
