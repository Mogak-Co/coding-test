const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
// 각각의 로프에 걸리는 중량
// 이 로프들로 들 수 있는 물체의 최대 중량

let ropes = input.map(Number).sort((a, b) => b - a);
let max = 0;

for (let i = 0; i < N; i++) {
  let weight = ropes[i] * (i + 1);
  if (max < weight) max = weight;
}

console.log(max);
