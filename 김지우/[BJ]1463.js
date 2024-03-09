const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();
let N = +input;
let dp = Array(N + 1).fill(0);
// 인덱스 = 숫자, 값 = 연산 횟수
// 0 1 2 3 4 5 6 7 8 9 10
// 0 0 1 1 2 3 2 3 3 2 3

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
}
console.log(dp[N]);
