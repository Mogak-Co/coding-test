let [a, ...b] = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let prev = [];
let answer = 0;

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b[i].length; j++) {
    if (b[i][j - 1] === b[i][j] || !prev.includes(b[i][j])) {
      prev.push(b[i][j]);
    }
  }
  if (prev.length === b[i].length) {
    answer++;
  }
  prev = [];
}

console.log(answer);