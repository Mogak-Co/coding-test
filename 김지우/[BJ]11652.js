const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, ...rest] = input
arr = rest.map(BigInt)

const cards = new Map()
let ans = 0
let maxKey = 0

for (let i = 0; i < N; i++) {
  cards.set(arr[i], (cards.get(arr[i]) || 0) + 1)
}

for (let [key, val] of cards) {
  if (ans < val) {
    ans = val
    maxKey = key
  }
  if (ans === val) {
    maxKey = maxKey > key ? key : maxKey
  }
}
console.log(maxKey.toString())
