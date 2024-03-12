const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();

for (let t = 0; t < T; t++) {
  const [N, M] = input.shift().split(' ').map(Number);
  const dp = Array.from(Array(30), () => Array(30).fill(0));
  dp[1][1] = 1;
  dp[2][1] = 2;
  dp[2][2] = 1;

  for (let i = 3; i <= M; i++) {
    dp[i][1] = i;
    dp[i][i] = 1;
    for (let j = 2; j <= N; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[M][N]);
}
// dp[1][1] = 1;

// dp[2][1] = 2;
// dp[2][2] = 1;

// dp[3][1] = 3;
// dp[3][2] = 3;
// dp[3][3] = 1;

// dp[4][1] = 4;
// dp[4][2] = 6;
// dp[4][3] = 4;
// dp[4][4] = 1;

// const dp = Array.from(Array(M+1), () => Array(N+1).fill(0));
// 로 2차원 배열을 만들면 왜 런타임 에러가 날까?
