const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
for (let i = 0; i < T; i++) {
  let N = input[i];
  let dp = Array(N).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  for (let j = 3; j < N; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
  }
  console.log(dp[N - 1]);
}
