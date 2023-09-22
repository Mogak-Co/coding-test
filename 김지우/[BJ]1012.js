const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const maps = [];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  const map = Array.from(Array(N), () => Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    const [X, Y] = input.shift().split(" ").map(Number);
    map[Y][X] = 1;
  }
  maps.push(map);
}

function solution(maps) {
  const ans = [];
  for (let map of maps) {
    let cnt = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j]) {
          cnt++;
          bfs(map, i, j);
        }
      }
    }
    ans.push(cnt);
  }
  return ans;
}

function bfs(map, y, x) {
  const queue = [[y, x]];
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  map[y][x] = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let newY = Y + dy[i];
        let newX = X + dx[i];
        if (newY >= 0 && newX >= 0 && newY < map.length && newX < map[0].length && map[newY][newX]) {
          queue.push([newY, newX]);
          map[newY][newX] = 0;
        }
      }
    }
  }
}

const ans = solution(maps);
ans.forEach((v) => console.log(v));
