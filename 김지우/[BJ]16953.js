const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let [A, B] = input.split(' ').map(Number);

let cnt = 0;

while (A < B) {
  if (B % 2 === 0) {
    B /= 2;
  } else if (B % 10 === 1) {
    B = Math.floor(B / 10);
  } else {
    break;
  }
  cnt++;
}
console.log(A === B ? cnt + 1 : -1);
