const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let min = Infinity;
let result;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    result = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}
console.log(result[0], result[1]);
