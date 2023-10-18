const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let stack = [];
let result = [];
let max = 1;

// 오름차순 = 스택에 쌓이는 순서대로 빼야함

for (let i = 1; i <= N; i++) {
  const num = +input[i];

  while (max <= num) {
    stack.push(max++);
    result.push("+");
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
