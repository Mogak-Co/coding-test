const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.pop()

for (let i = 0; i < input.length; i++) {
  let str = input[i].trim()
  let stack = []
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '(' || str[j] === '[') {
      stack.push(str[j])
    } else if (str[j] === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else if (str[j] === ']' && stack[stack.length - 1] === '[') {
      stack.pop()
    } else if (str[j] === ')' || str[j] === ']') {
      stack.push(str[j]) // 짝이 안 맞는 괄호 추가
    }
  }
  if (stack.length === 0) console.log('yes')
  else console.log('no')
}
