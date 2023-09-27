const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const K = +input.shift();
const graph = Array.from(Array(V + 1), () => Array());

for (let i = 0; i < E; i++) {
  const [from, to, weight] = input[i].split(" ").map(Number);
  graph[from].push({ to, weight });
}

const dist = Array(V + 1).fill(Infinity);
const visited = Array(V + 1).fill(false);

function dijkstra(start) {
  dist[start] = 0;

  for (let i = 1; i <= V; i++) {
    let min = Infinity; // 최소 비용
    let cur = 0; // 최소 비용의 노드

    for (let j = 1; j <= V; j++) {
      if (!visited[j] && min > dist[j]) {
        // 방문을 안했고 최소 비용보다 작으면
        min = dist[j];
        cur = j;
      }
    }

    visited[cur] = true; // 방문 처리

    for (let j = 0; j < graph[cur].length; j++) {
      let next = graph[cur][j].to; // 다음에 방문할 노드
      let weight = graph[cur][j].weight; // 다음에 방문할 노드로 가는 비용

      if (dist[next] > dist[cur] + weight) {
        // 현재까지 계산된 최단경로비용보다 작으면
        dist[next] = dist[cur] + weight; // 최단경로비용 = 현재노드까지의 비용 + 다음 노드로 가는 비용
      }
    }
  }
}

dijkstra(K);

for (let i = 1; i <= V; i++) {
  if (dist[i] === Infinity) console.log("INF");
  else console.log(dist[i]);
}
