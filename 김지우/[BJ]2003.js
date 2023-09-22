const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let ans = 0,
  start = 0,
  end = 0,
  sum = 0;

while (end <= N) {
  if (sum < M) {
    sum += arr[end++];
  } else if (sum > M) {
    sum -= arr[start++];
  } else if (sum === M) {
    ans++;
    sum += arr[end++];
  }
}

console.log(ans);
