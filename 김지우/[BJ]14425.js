const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const S = new Set();
for (let i = 0; i < N; i++) {
  S.add(input[i]);
}
let cnt = 0;

for (let i = N; i < N + M; i++) {
  if (S.has(input[i])) cnt++;
}

console.log(cnt);
