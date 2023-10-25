const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const arr = input.map((v) => v.split('').map(Number));
const visited = {};

function bfs(y, x) {
  const queue = [[y, x]];
  visited[[y, x]] = true;
  let dy = [0, 0, 1, -1];
  let dx = [1, -1, 0, 0];
  let cnt = 1;
  while (queue.length) {
    let size = queue.length; // 현재 큐의 크기를 저장하여 한 레벨의 원소만 처리 (최적화: 큐의 크기가 작아짐)
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < N &&
          newY < N &&
          arr[newY][newX] &&
          !visited[[newY, newX]]
        ) {
          visited[[newY, newX]] = true;
          cnt++;
          queue.push([newY, newX]);
        }
      }
    }
  }
  return cnt;
}

const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] && !visited[[i, j]]) answer.push(bfs(i, j));
  }
}
console.log(answer.length);
answer.sort((a, b) => a - b);
answer.forEach((v) => console.log(v));
