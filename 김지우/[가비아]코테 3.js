// (0,0)좌표 에서 (N,M) 좌표까지의 최단 경로의 수

let [N, M] = [5, 5];

let dp = Array.from(Array(N), () => Array(M).fill(0));

dp.forEach((row, i) => {
  row.forEach((val, j) => {
    dp[i][0] = 1;
    dp[0][j] = 1;
  });
});

dp.forEach((row, i) => {
  row.forEach((val, j) => {
    if (i > 0 && j > 0) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  });
});

// for (let i = 1; i < N; i++) {
//   for (let j = 1; j < N; j++) {
//     dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//   }
// }

console.log(dp);
