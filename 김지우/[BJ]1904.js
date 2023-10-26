const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let N = +fs.readFileSync(filePath).toString();

const dp = Array(N + 1).fill(0);

// 1
// 00, 11
// 100 111 001
// 1001 1111 0011 0011 1100

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[N]);
