const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let answer = 1

const n = +input.shift()
let candy = input.map((str) => str.split(''))
console.log(candy)
const checkCandy = () => {
    for (let i = 0; i < n; i++) {
        let cnt1 = 1
        let cnt2 = 1
        for (let j = 0; j < n - 1; j++) {
            if (candy[i][j] === candy[i][j + 1]) cnt1++ // 가로줄의 최댓값
            else cnt1 = 1

            if (candy[j][i] === candy[j + 1][i]) cnt2++ // 세로줄의 최댓값
            else cnt2 = 1
            answer = Math.max(answer, cnt1, cnt2)
        }
    }
}

for (i = 0; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
        const temp1 = candy[i][j]
        candy[i][j] = candy[i][j + 1]
        candy[i][j + 1] = temp1
        checkCandy()
        candy[i][j + 1] = candy[i][j]
        candy[i][j] = temp1

        const temp2 = candy[j][i]
        candy[j][i] = candy[j + 1][i]
        candy[j + 1][i] = temp2
        checkCandy()
        candy[j + 1][i] = candy[j][i]
        candy[j][i] = temp2
    }
}

console.log(answer)
