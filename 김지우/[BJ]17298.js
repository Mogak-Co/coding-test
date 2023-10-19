const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 오큰수
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const stack = []; // 인덱스

const result = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    // 스택이 비어있지 않고, 스택의 마지막 원소가 현재 원소보다 작을 때
    // 현재 원소가 스택의 마지막 원소의 오큰수가 됨
    result[stack.pop()] = arr[i];
  }
  stack.push(i); // 현재 원소의 인덱스를 스택에 push
}

console.log(result.join(" "));
