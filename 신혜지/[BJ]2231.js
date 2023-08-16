const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let A = require('fs').readFileSync(filePath).toString().trim();
A = Number(A);

function getSum(num) {
  let sum = num;
  let str = num.toString();
  
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]); 
  }

  return sum; 
}

function solution(num) {
  for (let i = 1; i <= num; i++) {
    if (getSum(i) === num) {
      return i;
    } 
  }
  return 0;
}

console.log(solution(A));