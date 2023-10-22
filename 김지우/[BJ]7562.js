const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift()

for (let i = 0; i < N; i++) {
    let I = +input.shift()
    let [startY, startX] = input.shift().split(' ').map(Number)
    let [endY, endX] = input.shift().split(' ').map(Number)
    let visited = Array.from(Array(I), () => Array(I).fill(false))
    console.log(bfs(startY, startX, endY, endX, I, visited))
}

function bfs(startY, startX, endY, endX, I, visited) {
    const dy = [1, 1, -1, -1, 2, 2, -2, -2]
    const dx = [2, -2, 2, -2, 1, -1, 1, -1]
    let queue = [[startY, startX, 0]]
    visited[startY][startX] = true
    while (queue.length) {
        let [y, x, cnt] = queue.shift()
        if (y === endY && x === endX) return cnt
        for (let i = 0; i < 8; i++) {
            let ny = y + dy[i]
            let nx = x + dx[i]
            if (ny >= 0 && nx >= 0 && ny < I && nx < I && !visited[ny][nx]) {
                visited[ny][nx] = true
                queue.push([ny, nx, cnt + 1])
            }
        }
    }
}
