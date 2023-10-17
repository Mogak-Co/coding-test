const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift();
let arr = input.shift().split(" ").map(Number);

let dp = Array(T).fill(0);

// 문제에서 말하는 가장 ~ 수열 = 처음과 끝 요소 사이에 있는 요소들이 모두 증가
// 즉 10 어쩌구 저쩌구 20 으로 끝나면 무조건 길이 2임
// dp[i] = i 까지의 가장 긴 증가하는 부분 수열의 길이
// 현재 값보다 작은 값들 중 가장 큰 dp값 + 1

for (let i = 0; i < T; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}
console.log(Math.max(...dp));
