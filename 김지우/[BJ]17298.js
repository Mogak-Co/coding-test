const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

// 오큰수
const N = +input[0]
const arr = input[1].split(' ').map(Number)
const stack = [] // 스택에 인덱스를 넣는 방법

const result = new Array(N).fill(-1)
// 스택이 비어있지 않고, 스택의 마지막 원소(인덱스가 가리키는 원소)가 현재 원소보다 작을 때
// 현재 원소가 스택의 마지막 원소(인덱스)의 오큰수가 됨
// 비어있다면 비교할 대상이 없다는 뜻이므로 현재 원소의 인덱스를 스택에 push

for (let i = 0; i < N; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    result[stack.pop()] = arr[i]
  }
  stack.push(i)
}

console.log(result.join(' '))

// 스택에 인덱스가 아닌 원소를 넣는 방법 (스택의 원소가 오큰수)

// 스택의 마지막 원소가 현재 원소보다 작을 때
// 오큰수가 될 수 없으므로 pop
// 위 while문 이후 남은 스택의 마지막 원소가 현재 i 자리의 오큰수
// 비어있다면 비교할 대상이 없다는 뜻이므로 현재 원소를 스택에 push

// for (let i = N - 1; i >= 0; i--) {
//   while (stack.length && stack[stack.length - 1] <= arr[i]) {
//     stack.pop();
//   }
//   if (stack.length) {
//     result[i] = stack[stack.length - 1];
//   }
//   stack.push(arr[i]);

// }

// console.log(result.join(" "));
