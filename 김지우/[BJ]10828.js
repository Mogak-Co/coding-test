const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift();
let stack = [];
let result = "";

for (let i = 0; i < N; i++) {
  let str = input.shift();
  [str, val] = str.split(" ");
  if (str === "push") stack.push(val);
  if (str === "pop") result += (stack.pop() || -1) + "\n";
  if (str === "size") result += stack.length + "\n";
  if (str === "empty") result += (stack.length ? 0 : 1) + "\n";
  if (str === "top") result += (stack[stack.length - 1] || -1) + "\n";
}
console.log(result.trim());
