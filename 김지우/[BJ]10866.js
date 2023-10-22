const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = +input.shift()
let deque = []
let result = ''

for (let i = 0; i < N; i++) {
  let str = input.shift()
  ;[str, val] = str.split(' ')
  if (str === 'push_front') deque.unshift(val)
  if (str === 'push_back') deque.push(val)
  if (str === 'pop_front') result += (deque.shift() || -1) + '\n'
  if (str === 'pop_back') result += (deque.pop() || -1) + '\n'
  if (str === 'size') result += deque.length + '\n'
  if (str === 'empty') result += (deque.length ? 0 : 1) + '\n'
  if (str === 'front') result += (deque[0] || -1) + '\n'
  if (str === 'back') result += (deque[deque.length - 1] || -1) + '\n'
}
console.log(result.trim())
