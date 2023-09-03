const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = +input.shift();
const maps = [];

for (let i = 0; i < T; i++) {
  let [M, N, K] = input.shift().split(" ").map(Number);
  let map = Array.from(Array(N), () => Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    let [X, Y] = [+input[j].split(" ")[0], +input[j].split(" ")[1]];
    map[Y][X] = 1;
  }
  maps.push(map);
  input.splice(0, K);
}
function solution(maps) {
  const results = [];

  for (let map of maps) {
    let count = 0;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === 1) {
          count++; // 최초의 1만 cnt++
          bfs(map, i, j); // bfs 에서 인접 1들을 감염시킴
        }
      }
    }
    results.push(count);
  }
  return results;
}

function bfs(map, x, y) {
  const queue = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  queue.push([x, y]);
  map[x][y] = 0; // 감염

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const newX = curX + dx[i];
      const newY = curY + dy[i];

      if (newX >= 0 && newY >= 0 && newX < map.length && newY < map[0].length && map[newX][newY] === 1) {
        // 인접한 배추를 발견하면 감염 처리하고 큐에 추가
        map[newX][newY] = 0; // 감염
        queue.push([newX, newY]);
      }
    }
  }
}

const results = solution(maps);
results.forEach((v) => console.log(v));
