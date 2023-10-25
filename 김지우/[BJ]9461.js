const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
for (let i = 0; i < T; i++) {
  const N = +input.shift();
  const dp = Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  console.log(dp[N]);
}
