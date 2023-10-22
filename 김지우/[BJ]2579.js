const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let T = +input.shift()
let arr = input.map(Number)

let dp = Array(T + 1).fill(0)

// 끝의 계단부터 시작
// 마지막 계단은 무조건 밟아야 함
// 마지막 계단 - 1, 마지막 계단 -2 중 큰 값 선택

for (let i = 1; i <= T; i++) {
    if (i === 1) {
        dp[i] = arr[i - 1]
    } else if (i === 2) {
        dp[i] = arr[i - 2] + arr[i - 1]
    } else {
        // 마지막 계단 + (마지막 계단 - 2 까지의 최대값)
        // or 마지막 계단 + 마지막 계단 - 1 + (마지막 계단 - 3 까지의 최대값)
        dp[i] = Math.max(
            dp[i - 2] + arr[i - 1],
            dp[i - 3] + arr[i - 2] + arr[i - 1]
        )
    }
}
console.log(dp[T])
