const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();
let n = +input;

let arr = [0, 1];
for (let i = 2; i <= n; i++) {
  arr.push(BigInt(arr[i - 1]) + BigInt(arr[i - 2]));
}
console.log(String(arr[n]));
