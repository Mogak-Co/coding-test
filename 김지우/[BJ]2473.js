const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
let result;

for (let i = 0; i < N - 2; i++) {
  let left = i + 1;
  let right = N - 1;

  while (left < right) {
    let sum = arr[i] + arr[left] + arr[right];

    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      result = [arr[i], arr[left], arr[right]];
    }

    if (sum === 0) {
      console.log(result[0], result[1], result[2]);
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(result[0], result[1], result[2]);
