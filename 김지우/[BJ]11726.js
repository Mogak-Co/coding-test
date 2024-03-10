const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();
let T = +input;

// 마지막이 ㅣ 일 때는 가로길이가 n - 1 인 타일
// 마지막이 = 일 때는 가로길이가 n - 2 인 타일

let dp = [1, 2];
for (let i = 2; i < T; i++) {
  dp.push(dp[i - 1] + (dp[i - 2] % 10007));
}
console.log(dp[T - 1]);
