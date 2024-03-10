const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
let arr = input.map(Number);

let fibo = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= 40; i++) {
  fibo[i] = [fibo[i - 1][0] + fibo[i - 2][0], fibo[i - 1][1] + fibo[i - 2][1]];
}

arr.forEach((v) => console.log(...fibo[v]));
