const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/[1]input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let map = input.map((v) => v.split('').map(Number));
let visited = Array.from(Array(N), () => Array(N).fill(false));

let ans = [];

let dy = [1, -1, 0, 0];
let dx = [0, 0, 1, -1];

function bfs(y, x) {
  let cnt = 0;
  let queue = [[y, x]];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      if (visited[Y][X]) continue;
      visited[Y][X] = true;
      map[Y][X] = 0;
      cnt++;
      for (let j = 0; j < 4; j++) {
        let [newY, newX] = [Y + dy[j], X + dx[j]];
        if (newY >= 0 && newX >= 0 && newY < N && newX < N && map[newY][newX]) {
          queue.push([newY, newX]);
        }
      }
    }
  }
  ans.push(cnt);
  return;
}

map.forEach((row, i) => {
  row.forEach((val, j) => {
    if (val) bfs(i, j);
  });
});

ans.sort((a, b) => a - b);
console.log(ans.length);
ans.forEach((v) => console.log(v));
