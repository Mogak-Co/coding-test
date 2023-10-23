const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const poketArr = input.slice(0, N)
const poketMap = new Map()

for (let i = 0; i < N; i++) {
  poketMap.set(input[i], i + 1)
}

let ans = []

for (let i = N; i < N + M; i++) {
  if (poketMap.has(input[i])) {
    ans.push(poketMap.get(input[i]))
  } else {
    ans.push(poketArr[input[i] - 1])
  }
}

console.log(ans.join('\n'))
