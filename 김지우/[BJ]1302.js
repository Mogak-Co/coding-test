const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const books = new Map();
let max = 0;
let ans = input[0];

for (let i = 0; i < N; i++) {
  if (!books.get(input[i])) books.set(input[i], 1);
  else books.set(input[i], books.get(input[i]) + 1);
}
for (let [key, val] of books) {
  if (max < val) {
    ans = key;
    max = val;
  }
  if (max === val) {
    ans = [ans, key].sort()[0];
  }
}
console.log(ans);
