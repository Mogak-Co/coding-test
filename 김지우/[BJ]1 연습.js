const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();

let ans = '';
for (let i = input; i > 0; i--) {
  ans += ' '.repeat(input - i) + '*'.repeat(i) + '\n';
}
console.log(ans.trim());
