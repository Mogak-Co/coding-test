const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const comNums = +input.shift();
const pairs = +input.shift();
const graph = Array.from(Array(comNums + 1), () => Array());
for (let i = 0; i < pairs; i++) {
  const [from, to] = input[i].split(" ");
  graph[from].push(to);
  graph[to].push(from);
}

let visited = Array(comNums + 1).fill(false);
let dfsAns = [];

function dfs(v) {
  if (visited[v]) return;
  visited[v] = true;
  dfsAns.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (!visited[next]) dfs(next);
  }
}

dfs(1);
console.log(dfsAns.length - 1);
