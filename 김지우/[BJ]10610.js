const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let N = input.split('').map(Number);

// 30의 배수가 되는 가장 큰 수
// N을 내림차순으로 정렬하기
// 30 60 90 120 150 180 210 240 270 300 330 360
// 끝에 0이 오고, 각 자리수의 합이 3의 배수인가

if (!N.includes(0)) {
  console.log(-1);
} else {
  let sum = N.reduce((a, c) => a + c, 0);
  if (sum % 3 !== 0) {
    console.log(-1);
  } else {
    N.sort((a, b) => b - a);
    console.log(N.join(''));
  }
}
