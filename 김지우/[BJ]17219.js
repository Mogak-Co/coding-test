const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const map = new Map()
let ans = ''

for (let i = 1; i <= N; i++) {
  const [site, pw] = input[i].split(' ')
  map.set(site, pw)
}
for (let i = N + 1; i <= N + M; i++) {
  ans += map.get(input[i]) + '\n'
}
console.log(ans.trim())
