const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, K] = input.shift().split(' ').map(Number)

let visited = Array(100001).fill(false)

function bfs(start, end) {
  let queue = [start]
  let level = 0
  visited[start] = true
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      if (cur === end) return level
      let nexts = [cur - 1, cur + 1, cur * 2]
      for (let next of nexts) {
        if (next >= 0 && next <= 100000 && !visited[next]) {
          visited[next] = true
          queue.push(next)
        }
      }
    }
    level++
  }
}

console.log(bfs(N, K))
