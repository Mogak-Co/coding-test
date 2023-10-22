const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)

let ans = 0,
  start = 0,
  end = 0,
  sum = 0

while (start < N) {
  if (sum < M && end < N) sum += arr[end++]
  else sum -= arr[start++]
  if (sum === M) ans++
}

console.log(ans)
