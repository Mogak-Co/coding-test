const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);
const X = +input.shift();

let ans = 0,
  start = 0,
  end = N - 1;
arr.sort((a, b) => a - b);

while (start < end) {
  let sum = arr[start] + arr[end];
  if (sum === X) {
    ans++;
    start++;
    end--;
  } else if (sum < X) {
    start++;
  } else {
    end--;
  }
}

console.log(ans);
