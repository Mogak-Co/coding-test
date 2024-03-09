const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString();
let N = +input;

// cnt 는 5로 나누어 떨어질 때까지 3을 빼는 횟수
let cnt = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + cnt);
    break;
  } else {
    cnt += 1;
    N -= 3;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
}
