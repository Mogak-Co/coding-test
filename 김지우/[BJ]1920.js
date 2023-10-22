const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input[0]
const arr1 = input[1].split(' ').map(Number)
const M = +input[2]
const arr2 = input[3].split(' ').map(Number)

arr1.sort((a, b) => a - b)

const binarySearch = (target) => {
  let start = 0
  let end = N - 1
  let mid

  while (start <= end) {
    mid = Math.floor((start + end) / 2)

    if (arr1[mid] === target) return 1
    if (arr1[mid] < target) start = mid + 1
    if (arr1[mid] > target) end = mid - 1
  }
  return 0
}

let result = ''
for (let i = 0; i < M; i++) {
  result += binarySearch(arr2[i]) + '\n'
}
console.log(result.trim())
