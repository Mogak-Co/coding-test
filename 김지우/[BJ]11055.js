const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();
let arr = input.shift().split(' ').map(Number);

let dp = Array(T).fill(0);

// 문제에서 말하는 수열 = 처음과 끝 요소 사이에 있는 요소들이 모두 증가
// 증가하는 부분만 더한다

for (let i = 0; i < T; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + arr[i]);
  }
}
console.log(Math.max(...dp));
