const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift();
let arr = input.shift().split(" ").map(Number);

let dp = Array(T).fill(0);

for (let i = 0; i < T; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1;
  }
}
console.log(Math.max(...dp));
