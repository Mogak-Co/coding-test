const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const N = +input.shift();
  const clothes = new Map();
  let ans = 1;

  for (let j = 0; j < N; j++) {
    const [name, type] = input.shift().split(' ');
    if (clothes.has(type)) clothes.set(type, clothes.get(type) + 1);
    else clothes.set(type, 1);
  }
  for (let [key, val] of clothes) {
    ans *= val + 1;
  }
  console.log(ans - 1);
}
