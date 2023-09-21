const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const maps = [];

for (let i = 0; i < T; i++) {
  let [M, N, K] = input.shift().split(" ").map(Number);
  let map = Array.from(Array(N), () => Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    let [X, Y] = input.shift().split(" ").map(Number);
    map[Y][X] = 1;
  }
  maps.push(map);
}

function solution(maps) {
  const ans = [];

  for (let map of maps) {
    let count = 0;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j]) {
          count++; // 최초의 1만 cnt++
          bfs(map, i, j); // bfs 에서 인접 1들을 감염시킴
        }
      }
    }
    ans.push(count);
  }
  return ans;
}

function bfs(map, y, x) {
  const queue = [[y, x]];
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];

  map[y][x] = 0; // 냠냠

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [Y, X] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newY = Y + dy[i];
        const newX = X + dx[i];

        if (newY >= 0 && newX >= 0 && newY < map.length && newX < map[0].length && map[newY][newX]) {
          // 인접한 배추를 발견하면 냠냠 처리하고 큐에 추가
          map[newY][newX] = 0; // 냠냠
          queue.push([newY, newX]);
        }
      }
    }
  }
}

const ans = solution(maps);
ans.forEach((v) => console.log(v));
