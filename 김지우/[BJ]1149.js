const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
let arr = input.map((v) => v.split(' ').map(Number));

let dp = Array.from(Array(T + 1), () => Array(3).fill(0));
// 마지막 집을 R, G, B로 칠하는 각각의 경우의 최소값을 구하기
// 마지막 집을 R로 칠할 경우, 이전 집은 G 또는 B로 칠해야 함

for (let i = 0; i < T; i++) {
  dp[i + 1][0] = Math.min(dp[i][1], dp[i][2]) + arr[i][0];
  dp[i + 1][1] = Math.min(dp[i][0], dp[i][2]) + arr[i][1];
  dp[i + 1][2] = Math.min(dp[i][0], dp[i][1]) + arr[i][2];
}
console.log(Math.min(...dp[T]));
