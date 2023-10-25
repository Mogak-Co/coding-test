const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const wine = [];
for (let i = 0; i < N; i++) {
  wine.push(+input[i]);
}
const dp = Array(N).fill(0);
dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(dp[1], wine[0] + wine[2], wine[1] + wine[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    wine[i] + wine[i - 1] + dp[i - 3],
    wine[i] + dp[i - 2],
    dp[i - 1]
  );
}
console.log(dp[N - 1]);
