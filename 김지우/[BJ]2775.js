const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();

for (let i = 0; i < T; i++) {
  let k = +input.shift();
  let n = +input.shift();
  let house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}

// 2층 1 4 10 20 35
// 1층 1 3 6 10 15
// 0층 1 2 3 4 5
