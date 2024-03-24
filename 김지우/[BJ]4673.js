const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/[1]input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let nonSelf = new Set();

for (let i = 1; i <= 10000; i++) {
  let n = i
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);

  nonSelf.add(i + n);
}
for (let i = 1; i <= 10000; i++) {
  if (nonSelf.has(i)) continue;
  console.log(i);
}
