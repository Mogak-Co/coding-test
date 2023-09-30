const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const K = +input.shift();
const graph = Array.from(Array(V + 1), () => []);

for (let i = 0; i < E; i++) {
  const [from, to, cost] = input[i].split(" ").map(Number);
  graph[from].push({ to, cost });
}

const visited = Array(V + 1).fill(false);
const dist = Array(V + 1).fill(Infinity);

function dijkstra(start) {
  dist[start] = 0;

  for (let i = 1; i <= V; i++) {
    let cost = Infinity;
    let cur = 0;

    for (let j = 1; j <= V; j++) {
      if (!visited[j] && cost > dist[j]) {
        cost = dist[j];
        cur = j;
      }
    }

    visited[cur] = true;

    for (let j = 0; j < graph[cur].length; j++) {
      let next = graph[cur][j].to;
      let cost = graph[cur][j].cost;

      if (dist[next] > dist[cur] + cost) {
        dist[next] = dist[cur] + cost;
      }
    }
  }
}

dijkstra(K);

for (let i = 1; i <= V; i++) {
  if (dist[i] === Infinity) console.log("INF");
  else console.log(dist[i]);
}
