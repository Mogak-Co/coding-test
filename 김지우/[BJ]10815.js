const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = input.shift().split(' ').map(Number);
const M = +input.shift();
const arr2 = input.shift().split(' ').map(Number);

let cards = new Set(arr);
let ans = '';

for (let i = 0; i < M; i++) {
  if (cards.has(arr2[i])) ans += '1 ';
  else ans += '0 ';
}

console.log(ans.trim());
