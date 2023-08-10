const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...T] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let answer = [];

function getT(num) {
  let result = [];
  for (let i = 1; i * (i + 1) / 2 <= num; i++) {
    if ((i * (i + 1)) / 2 <= num) {
      result.push((i * (i + 1)) / 2);
    }
  }
  return result;
}

function isTotalNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === num) {
          return true;
        }
      }
    }
  }

  return false;
}

for (let i = 0; i < N; i++) {
  let arr = getT(Number(T[i]));
  let result = isTotalNum(arr, Number(T[i]));

  result ? answer.push(1) : answer.push(0);
}

console.log(answer.join('\n'));