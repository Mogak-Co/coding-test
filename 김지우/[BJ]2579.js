const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
let arr = input.map(Number);

let dp = Array(T + 1).fill(0);

for (let i = 1; i <= T; i++) {
  if (i === 1) dp[i] = arr[i - 1];
  else if (i === 2) dp[i] = arr[i - 1] + arr[i - 2];
  else
    dp[i] = Math.max(
      arr[i - 1] + dp[i - 2],
      arr[i - 1] + arr[i - 2] + dp[i - 3]
    );
}
console.log(dp[T]);

// 끝의 계단부터 시작
// 마지막 계단은 무조건 밟아야 함
// 마지막 계단 - 1, 마지막 계단 -2 중 큰 값 선택

// 총 계단이 1개 = 마지막
// 총 계단이 2개 = 마지막 -1, 마지막
// 3개 부터 = 마지막 + (마지막 - 1 까지의 최대) or
// or 마지막 + 마지막 - 1 + (마지막 계단 - 2 까지의 최대값)

// else if 와 else 로 구분해야
// 아래쪽에서 dp[-1] 이런 식으로 계산해서 NaN 나오는 참사가 안 일어난다
