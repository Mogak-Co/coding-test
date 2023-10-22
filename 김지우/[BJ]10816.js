const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift()
const arr = input.shift().split(' ').map(Number)
const M = +input.shift()
const arr2 = input.shift().split(' ').map(Number)

let cards = new Map()
let ans = ''

for (let i = 0; i < N; i++) {
    if (cards.has(arr[i])) {
        cards.set(arr[i], cards.get(arr[i]) + 1)
    } else {
        cards.set(arr[i], 1)
    }
}

for (let i = 0; i < M; i++) {
    if (cards.has(arr2[i])) {
        ans += cards.get(arr2[i]) + ' '
    } else {
        ans += 0 + ' '
    }
}

console.log(ans)
