const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let T = +input.shift()

for (let i = 0; i < T; i++) {
    let str = input.shift()
    let cnt = 0
    for (let val of str) {
        if (val === '(') cnt++
        else cnt--
        if (cnt < 0) {
            console.log('NO')
            break
        }
    }
    if (cnt > 0) console.log('NO')
    else if (cnt === 0) console.log('YES')
}
