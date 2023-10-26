const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let ans = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let val of arr) {
    if (val > mid) sum += val - mid;
  }

  if (sum >= M) {
    ans = Math.max(ans, mid);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(ans);
