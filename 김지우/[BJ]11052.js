const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);

// dp[i] = i 개의 카드를 구매할 때 최대값
// dp[1] = arr[0]
// dp[2] = dp[1] + arr[0]
//                 arr[1]
// dp[3] = dp[2] + arr[0]
//         dp[1] + arr[1]
//                        arr[2]

const dp = Array(N + 1).fill(0);
dp[1] = arr[0];

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + arr[j - 1]);
  }
}

console.log(dp[N]);
