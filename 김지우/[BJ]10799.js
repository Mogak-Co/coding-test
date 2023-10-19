const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const bracket = input[0];
const stack = [];

// 쇠막대기의 개수
let cnt = 0;

for (let i = 0; i < bracket.length; i++) {
  if (bracket[i] === "(") {
    stack.push(bracket[i]); // 여는 괄호는 무조건 push
  } else {
    stack.pop(); // 닫는 괄호는 무조건 pop
    if (bracket[i - 1] === "(") {
      // 레이저인 경우
      cnt += stack.length; // stack에 남아있는 여는 괄호의 개수만큼 쇠막대기가 추가됨
    } else {
      cnt++; // 쇠막대기의 끝인 경우
    }
  }
}

console.log(cnt);
