const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const map = input.map((line) => line.split('').map(Number))
const visited = Array.from(Array(N), () => Array(M).fill(false))
let ans = 0

// 맵 2차원 배열, 방문 2차원 배열, ans
// bfs
// 큐(시작점 넣기), 방향 배열

// while (queue.length) {
// ans++
// 현재 큐의 크기를 저장하여 한 레벨의 원소만 처리

// size 만큼 for 문
// shift 로 하나 빼와서 [Y, X] 방문 했으면 continue
// map[Y][X] = 0; 되돌아가기 방지
// visited[Y][X] = true;

// 4방향 for 문
// newY, newX 만들고
// 맵 안 범위이고 map[newY][newX] 1이면
// queue.push([newY, newX]);
// 만약 newY, newX 가 도착했으면, 리턴 ans++

// bfs(0,0);
// console.log(ans);

function bfs(y, x) {
  const queue = [[y, x]]
  const dy = [0, 0, 1, -1]
  const dx = [1, -1, 0, 0]
  while (queue.length) {
    ans++
    const size = queue.length
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift()
      if (visited[Y][X]) continue
      map[Y][X] = 0
      visited[Y][X] = true
      for (let i = 0; i < 4; i++) {
        let newY = Y + dy[i]
        let newX = X + dx[i]
        if (newY >= 0 && newX >= 0 && newY < N && newX < M && map[newY][newX]) {
          queue.push([newY, newX])
        }
        if (newY === N - 1 && newX === M - 1) return ans++
      }
    }
  }
}

bfs(0, 0)
console.log(ans)
