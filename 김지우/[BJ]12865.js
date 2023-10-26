const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split(' ').map(Number));
const dp = Array(K + 1).fill(0);

// dp[i] = i 무게 이하의 최대 가치

for (let [W, V] of arr) {
  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);

// dp[7] = max(dp[7], dp[7-6] + 13)
// dp[6] = max(dp[6], dp[6-6] + 13)
// dp[7] = max(dp[7], dp[7-4] + 8)
// dp[6] = max(dp[6], dp[6-4] + 8)
// dp[5] = max(dp[5], dp[5-4] + 8)
