const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
let arr = input.map(Number);

let dp = Array(11).fill(0);
dp[1] = 1; // 1
dp[2] = 2; // 11 2
dp[3] = 4; // 111 12 21 3

// dp[1] 방법들에 3 추가 13
// dp[2] 방법들에 2 추가 112 22
// dp[3] 방법들에 1 추가 1111 121 211 31

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

arr.forEach((v) => console.log(dp[v]));
