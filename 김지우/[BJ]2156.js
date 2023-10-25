const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const wine = [];
for (let i = 0; i < T; i++) {
  wine.push(+input[i]);
}
const dp = Array(T).fill(0);

dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(wine[0] + wine[2], wine[1] + wine[2], dp[1]);

for (let i = 3; i < T; i++) {
  let case1 = wine[i] + wine[i - 1] + dp[i - 3];
  let case2 = wine[i] + dp[i - 2];
  let case3 = dp[i - 1];

  dp[i] = Math.max(case1, case2, case3);
}
console.log(dp[T - 1]);
