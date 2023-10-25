const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
// 트리의 지름 구하기
// 1에서 출발해 가장 먼 노드 X를 찾고
// X에서 가장 먼 노드 Y를 찾으면
// X와 Y 사이의 거리가 트리의 지름
// [부모, 자식, 가중치]
// X - 1 - Y

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);

for (let i = 0; i < N - 1; i++) {
  const [parent, child, weight] = input[i].split(' ').map(Number);
  graph[parent].push([child, weight]);
  graph[child].push([parent, weight]);
}

let max = 0;
let maxIndex = 0;

function dfs(index, weight) {
  visited[index] = true;

  if (max < weight) {
    max = weight;
    maxIndex = index;
  }

  for (let i = 0; i < graph[index].length; i++) {
    const [next, nextWeight] = graph[index][i];
    if (!visited[next]) dfs(next, weight + nextWeight);
  }
}
dfs(1, 0);
visited.fill(false);

dfs(maxIndex, 0);
console.log(max);
