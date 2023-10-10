const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString();
let N = +input;
let cnt = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + cnt);
    break;
  } else {
    N -= 3;
    cnt++;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
}
