const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let arr = input.map((v) => v.split(' ').map(Number));
let dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [time, pay] = arr[i];
  if (time + i > N) continue;
  dp[i] = dp[i] + pay; // i일 까지의 최댓값
  for (let j = i + time; j < N; j++) {
    dp[j] = Math.max(dp[i], dp[j]); // i일부터 N일까지의 최댓값으로 갱신
  }
}

console.log(Math.max(...dp));
