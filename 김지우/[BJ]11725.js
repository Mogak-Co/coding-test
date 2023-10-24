const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input = input.map((v) => v.split(' ').map(Number))
let N = +input.shift()
let graph = Array.from(Array(N + 1), () => [])
let parent = Array(N + 1).fill(0)
let result = ''

for (let [from, to] of input) {
  graph[from].push(to)
  graph[to].push(from)
}
// console.log(graph)
// 이 요소의 부모는 누구이지?

function dfs(start) {
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i]
    if (parent[next] === 0) {
      parent[next] = start // next의 부모는 start, 즉 6의 부모는 1
      dfs(next)
    }
  }
}

dfs(1)

for (let i = 2; i <= N; i++) {
  result += parent[i] + '\n'
}

console.log(result.trim())
