const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/[1]input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);
let map = input.map((v) => v.split('').map(Number));

let ans = 0;
let visited = Array.from(Array(N), () => Array(M).fill(false));

let dy = [1, -1, 0, 0];
let dx = [0, 0, 1, -1];

function bfs(y, x) {
  let queue = [[y, x]];
  while (queue.length) {
    let size = queue.length;
    ans++;
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      if (visited[Y][X]) continue;
      visited[Y][X] = true;
      map[Y][X] = 0;
      for (let j = 0; j < 4; j++) {
        let newY = Y + dy[j];
        let newX = X + dx[j];
        if (newY >= 0 && newX >= 0 && newY < N && newX < M && map[newY][newX]) {
          queue.push([newY, newX]);
        }
        if (newY === N - 1 && newX === M - 1) {
          return ans++;
        }
      }
    }
  }
}

bfs(0, 0);
console.log(ans);
