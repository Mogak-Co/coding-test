const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const woods = input[1].split(' ').map(Number);

// sum >= M 일 때
// ans 는 mid 중에서도 최댓값

let max = Math.max(...woods);
let min = 0;
let ans = 0;

while (min <= max) {
  let mid = Math.floor((max + min) / 2);

  let sum = 0;

  for (let wood of woods) {
    if (wood > mid) sum += wood - mid;
  }

  if (sum >= M) {
    ans = Math.max(ans, mid);
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(ans);
