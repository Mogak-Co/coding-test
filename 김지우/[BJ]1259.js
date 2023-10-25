const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

let ans = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] == input[i].split('').reverse().join('')) ans += 'yes' + '\n';
  else ans += 'no' + '\n';
}
console.log(ans.trim());
