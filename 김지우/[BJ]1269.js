const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)
let ans = 0

const A = new Set(input.shift().split(' ').map(Number))
const B = new Set(input.shift().split(' ').map(Number))

for (let val of A) {
  if (!B.has(val)) ans++
}
for (let val of B) {
  if (!A.has(val)) ans++
}
console.log(ans)

// const [N, M] = input.shift().split(' ').map(Number)
// const setA = input[0].split(' ')
// const setB = input[1].split(' ')
// const set = new Set(setA.concat(setB)) // 합집합
// const intersection = N + M - set.size // 교집합

// console.log(setA.length + setB.length - 2 * intersection) // 두 차집합의 합
