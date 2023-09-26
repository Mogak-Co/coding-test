const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const lab = input.map((v) => v.split(" ").map(Number));

function spreadVirus(lab) {
  const dy = [0, 0, 1, -1];
  const dx = [1, -1, 0, 0];
  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 2) queue.push([i, j]);
    }
  }
  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && lab[ny][nx] === 0) {
        lab[ny][nx] = 2;
        queue.push([ny, nx]);
      }
    }
  }
}

function countSafeAreas(lab) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
}

function findMaxSafeArea(lab) {
  let maxSafeArea = 0;

  const zeros = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeros.length - 2; i++) {
    for (let j = i + 1; j < zeros.length - 1; j++) {
      for (let k = j + 1; k < zeros.length; k++) {
        const combination = [zeros[i], zeros[j], zeros[k]];

        const labCopy = lab.map((row) => [...row]);
        for (const [y, x] of combination) {
          labCopy[y][x] = 1; // 벽 세우기
        }

        // 바이러스 퍼뜨리기
        spreadVirus(labCopy);

        // 최댓값 갱신
        maxSafeArea = Math.max(maxSafeArea, countSafeAreas(labCopy));
      }
    }
  }

  return maxSafeArea;
}

const result = findMaxSafeArea(lab);
console.log(result);
