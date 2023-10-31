const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let start = 0,
  end = start + K - 1;

let sum = 0;
for (let i = start; i <= end; i++) {
  sum += arr[i];
}
let max = sum;

while (end < N) {
  sum += arr[end + 1] - arr[start];
  if (sum > max) max = sum;
  start++;
  end++;
}

console.log(max);
