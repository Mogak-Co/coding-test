let [A, B, ...C] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let list = [B];
let count = [B];
let result = 0;

for (let i = 0; i < B; i++) {
  [list[i], count[i]] = C[i].split(' ');
  result += list[i] * count[i];
}

if (Number(A) === result) {
  console.log('Yes');
} else {
  console.log('No');
}