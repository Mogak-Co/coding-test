const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = input.shift().split(' ').map(Number);

// dp[i] = i 까지의 최대 연속합
// arr[i]가 dp[i-1] 보다 크면 arr[i]가 새로운 최대 연속합
// 즉 dp[i] = arr[i]

const dp = Array(N).fill(0);
dp[0] = arr[0];
for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
}
console.log(Math.max(...dp));
