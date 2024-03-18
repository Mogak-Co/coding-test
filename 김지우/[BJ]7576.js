const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/[1]input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const map = input.map((v) => v.split(' ').map(Number));

let queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

let dy = [0, 0, -1, 1];
let dx = [-1, 1, 0, 0];

function bfs() {
  let cnt = 0;
  while (queue.length) {
    let newQueue = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue[i];
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (
          newY >= 0 &&
          newX >= 0 &&
          newY < N &&
          newX < M &&
          map[newY][newX] === 0
        ) {
          map[newY][newX] = 1;
          newQueue.push([newY, newX]);
        }
      }
    }
    queue = newQueue;
    cnt++;
  }
  return cnt;
}

let cnt = bfs();
let ans = map.flat().includes(0) ? -1 : cnt - 1; // 처음에 익은 토마토의 날짜를 제외하기
console.log(ans);
