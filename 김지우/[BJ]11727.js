const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();
let T = +input;

// 마지막이 ㅣ 일 때는 가로길이가 n - 1 인 타일
// 마지막이 = 일 때는 가로길이가 n - 2 인 타일
// 마지막이 ㅁ 일 때는 가로길이가 n - 2 인 타일

const dp = Array(T + 1).fill(0);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= T; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}
console.log(dp[T]);
