const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, H] = input.shift().split(' ').map(Number);
const map = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array(M).fill(0))
);

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    map[i][j] = input.shift().split(' ').map(Number);
  }
}
let queue = [];
let cnt = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (map[i][j][k] === 1) queue.push([i, j, k]);
    }
  }
}
let dz = [1, -1, 0, 0, 0, 0];
let dy = [0, 0, 1, -1, 0, 0];
let dx = [0, 0, 0, 0, 1, -1];

function bfs() {
  while (queue.length) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      let [Z, Y, X] = queue[i];
      for (let j = 0; j < 6; j++) {
        let newZ = Z + dz[j];
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (
          newZ >= 0 &&
          newY >= 0 &&
          newX >= 0 &&
          newZ < H &&
          newY < N &&
          newX < M &&
          map[newZ][newY][newX] === 0
        ) {
          map[newZ][newY][newX] = 1;
          newQueue.push([newZ, newY, newX]);
        }
      }
    }
    if (newQueue.length === 0) return;
    queue = newQueue;
    cnt++;
  }
}

bfs();

console.log(map.flat(2).includes(0) ? -1 : cnt);
