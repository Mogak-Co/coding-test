const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)

const graph = Array.from(Array(N + 1), () => [])
for (let i = 0; i < M; i++) {
    let [from, to] = input[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}
const visited = Array(N + 1).fill(false)
let cnt = 0

const dfs = (v) => {
    if (visited[v]) return
    visited[v] = true
    for (let i = 0; i < graph[v].length; i++) {
        let next = graph[v][i]
        if (!visited[next]) {
            dfs(next)
        }
    }
}

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i)
        cnt++
    }
}
console.log(cnt)
