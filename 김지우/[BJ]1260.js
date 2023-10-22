const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M, V] = input.shift().split(' ').map(Number)
const graph = Array.from(Array(N + 1), () => Array())
for (let i = 0; i < M; i++) {
  const [from, to] = input[i].split(' ')
  graph[from].push(to)
  graph[to].push(from)
}

graph.forEach((v) => v.sort((a, b) => a - b))
// console.log(graph);

let visited = Array(N + 1).fill(false)
let dfsAns = []

function dfs(v) {
  if (visited[v]) return
  visited[v] = true
  dfsAns.push(v)
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i]
    if (!visited[next]) dfs(next)
  }
}

dfs(V)
console.log(dfsAns.join(' '))

visited = Array(N + 1).fill(false)
let bfsAns = []

function bfs(v) {
  let queue = [v]

  while (queue.length) {
    let cur = queue.shift()
    visited[v] = true
    bfsAns.push(cur)
    for (let i = 0; i < graph[cur].length; i++) {
      let next = graph[cur][i]
      if (!visited[next]) {
        visited[next] = true
        queue.push(next)
      }
    }
  }
}
bfs(V)
console.log(bfsAns.join(' '))
