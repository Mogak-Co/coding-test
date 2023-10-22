const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = +input.split(' ')[0]
let K = +input.split(' ')[1]

let arr = Array(N)
  .fill(0)
  .map((v, i) => i + 1)
let result = []
let idx = K - 1

while (arr.length) {
  if (idx >= arr.length) idx %= arr.length
  result.push(arr.splice(idx, 1)[0])
  idx += K - 1
}

console.log(`<${result.join(', ')}>`)

//                idx res
// 1 2 3 4 5 6 7   2  3
// 1 2 4 5 6 7    2+2  6
// 1 2 4 5 7   2+2+2 % 5  2
// 1 4 5 7   2+2+2+2 % 4  1

// 11866 요세푸스 문제 0 과 중복임
