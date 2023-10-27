const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [K, N] = input.shift().split(' ').map(Number);
let lines = input.map(Number);

let max = Math.max(...lines);
let min = 0;
let ans = 0;

// sum (자른 랜선 개수) 가 N 개 이상일 때
// mid (랜선 길이) 의 최댓값이 ans

while (min <= max) {
  let mid = Math.floor((max + min) / 2);
  let sum = 0;
  for (let line of lines) {
    if (line >= mid) sum += Math.floor(line / mid);
  }
  if (sum >= N) {
    ans = Math.max(mid, ans);
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(ans);
