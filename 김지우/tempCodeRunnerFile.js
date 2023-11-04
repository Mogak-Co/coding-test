const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
let sorted = input.sort((a, b) => b - a);
console.log(sorted[K + 1]);
