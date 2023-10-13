const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let T = +input.shift();
let arr = input.map(Number);

for (let i = 0; i < T; i++) {
  const n = arr[i];
  const fibo = [
    [1, 0],
    [0, 1],
  ];
  for (let j = 2; j <= n; j++) {
    fibo[j] = [fibo[j - 1][0] + fibo[j - 2][0], fibo[j - 1][1] + fibo[j - 2][1]];
  }
  console.log(fibo[n][0], fibo[n][1]);
}
