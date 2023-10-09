const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let ans = 0,
  start = 0,
  end = 0,
  sum = 0;

while (start < N) {
  if (sum >= M) sum -= arr[start++];
  else if (end === N) break; // end가 N이면 더이상 더할 수 없으므로 break
  else sum += arr[end++];

  if (sum === M) ans++;
}

console.log(ans);
