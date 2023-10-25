const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// set 에 넣고
// enter 면 add, leave 면 delete
// arr 로 변환 후 사전 역순으로 sort

const N = +input[0];
const arr = input.slice(1);
const set = new Set();

for (let i = 0; i < N; i++) {
  const [name, status] = arr[i].split(' ');
  if (status === 'enter') set.add(name);
  else set.delete(name);
}
let sort = Array.from(set).sort().reverse();
console.log(sort.join('\n'));
