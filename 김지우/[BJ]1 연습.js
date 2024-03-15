const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/[1]input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let E = +input.shift();

let graph = Array.from(Array(N + 1), () => []);
for (let i = 0; i < E; i++) {
  let [from, to] = input.shift().split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

let visited = Array(N).fill(false);
let ans = 0;

function dfs(v) {
  if (visited[v]) return;
  ans++;
  visited[v] = true;
  graph[v].forEach((next) => dfs(next));
}

dfs(1);
console.log(ans - 1);
