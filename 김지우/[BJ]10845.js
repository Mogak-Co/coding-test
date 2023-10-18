const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift();
let queue = [];
let result = "";

for (let i = 0; i < N; i++) {
  let str = input.shift();
  [str, val] = str.split(" ");
  if (str === "push") queue.push(val);
  if (str === "pop") result += (queue.shift() || -1) + "\n";
  if (str === "size") result += queue.length + "\n";
  if (str === "empty") result += (queue.length ? 0 : 1) + "\n";
  if (str === "front") result += (queue[0] || -1) + "\n";
  if (str === "back") result += (queue[queue.length - 1] || -1) + "\n";
}
console.log(result.trim());
