const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()

let arr = input.map((num) => num.split(' ').map(Number))

const getStrike = (num1, num2) => {
    let cnt = 0
    const digits1 = String(num1)
    const digits2 = String(num2)
    for (let i = 0; i < 3; i++) {
        if (digits1[i] === digits2[i]) {
            cnt++
        }
    }
    return cnt
}

const getBall = (num1, num2) => {
    let cnt = 0
    const digits1 = String(num1)
    const digits2 = String(num2)
    for (let i = 0; i < 3; i++) {
        if (digits1.includes(digits2[i]) && digits1[i] !== digits2[i]) {
            cnt++
        }
    }
    return cnt
}

let allNums = []
for (let i = 111; i <= 999; i++) {
    const strNum = String(i)
    if (!strNum.includes('0') && new Set(strNum).size === 3) {
        allNums.push(i)
    }
}
for (let turn of arr) {
    let [guess, strike, ball] = turn
    allNums = allNums.filter(
        (num) =>
            getStrike(num, guess) === strike && getBall(num, guess) === ball
    )
}
console.log(allNums.length)
return allNums.length
