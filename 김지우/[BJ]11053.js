const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();
let arr = input.shift().split(' ').map(Number);

let dp = Array(T).fill(0);

// 문제에서 말하는 수열 = 처음과 끝 요소 사이에 있는 요소들이 모두 증가
// 즉 10 어쩌구 저쩌구 20 으로 끝나면 무조건 길이 2임
// dp[i] = i 까지의 가장 긴 증가하는 부분 수열의 길이
// dp[i] = 1 로 수열의 시작지점 재설정
// dp[i] 의 현재 값과 이 전까지의 dp 값 (dp[j] + 1) 보다 큰가
// 왜냐하면 arr[i] > arr[j] 로 이미 1 크니까 그 이상으로 커야 현상유지를 넘어선 최대값

for (let i = 0; i < T; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}
console.log(Math.max(...dp));
