const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .sort((a, b) => a - b);

let average = input.reduce((a, c) => a + +c, 0) / input.length;
let mid = +input[2];

console.log(average);
console.log(mid);
