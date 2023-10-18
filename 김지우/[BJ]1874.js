const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let stack = [];
let result = [];

let max = 1;

for (let i = 1; i <= N; i++) {
  const num = +input[i];

  while (max <= num) {
    stack.push(max);
    result.push("+");
    max++;
  }

  if (stack[stack.length - 1] === num) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));
