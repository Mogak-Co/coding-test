const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = +input.shift();

// 이친수는 1로 시작
// 1이 두번 연속 나오면 안 됨
// dp[1] = 1 // 1
// dp[2] = 1 // 10
// dp[3] = 2 // 100, 101
// dp[4] = 3 // 1000, 1001, 1010
// dp[5] = 5 // 10000, 10001, 10010, 10100, 10101

// dp[n] = dp[n-1] + dp[n-2]

let dp = Array(N + 1).fill(0);
dp[1] = 1;
dp[2] = 1;
for (let i = 3; i <= N; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(dp[N].toString());
