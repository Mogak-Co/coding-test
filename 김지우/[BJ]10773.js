const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let stack = [];

for (let i = 0; i < N; i++) {
  let num = +input[i];
  if (num === 0) stack.pop();
  else stack.push(num);
}
console.log(stack.reduce((a, c) => a + c, 0));
