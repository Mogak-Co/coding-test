const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const set1 = new Set(input.splice(0, N));
const ans = [];

for (let i = 0; i < M; i++) {
  if (set1.has(input[i])) ans.push(input[i]);
}
console.log(ans.length + '\n' + ans.sort().join('\n'));
