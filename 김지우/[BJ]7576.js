const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [M, N] = input.shift().split(' ').map(Number)
const map = input.map((v) => v.split(' ').map(Number))

let queue = []
let cnt = 0
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j])
    }
  }
}

function bfs() {
  let dy = [0, 0, -1, 1]
  let dx = [-1, 1, 0, 0]
  while (queue.length) {
    let size = queue.length
    let newQueue = []
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue[i]
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j]
        let newX = X + dx[j]
        if (
          newY >= 0 &&
          newX >= 0 &&
          newY < N &&
          newX < M &&
          map[newY][newX] === 0
        ) {
          map[newY][newX] = 1
          newQueue.push([newY, newX])
        }
      }
    }
    if (newQueue.length === 0) return
    queue = newQueue
    cnt++
  }
}

bfs()

let ans = map.flat().includes(0) ? -1 : cnt
console.log(ans)
