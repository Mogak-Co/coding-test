const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
let arr = input.map((v) => v.split(' ').map(Number));

// 정수 삼각형
// 맨 아래층부터 위로 올라가면서 합을 구한다.
// 맨 아래층 부터 맨 끝 전까지의 합을 구하니까 i > 0
// j 는 i 보다 1개 작으니까 j < i
// 맨 아래층 + 1층 부터 그 아래층 바로 밑 2개 중 큰 값을 더하기

for (let i = T - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    arr[i - 1][j] += Math.max(arr[i][j], arr[i][j + 1]);
  }
}
console.log(arr[0][0]);
