const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()
let N = +input
let dp = Array(N + 1).fill(0)
// 인덱스 = 숫자, 값 = 연산 횟수

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1)
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1)
}
console.log(dp[N])
