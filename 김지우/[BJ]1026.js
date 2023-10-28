const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let A = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let B = input.shift().split(' ').map(Number);

let ans = 0;

for (let i = 0; i < N; i++) {
  let maxB = Math.max(...B);
  B.splice(B.indexOf(maxB), 1);
  ans += A[i] * maxB;
}
console.log(ans);
