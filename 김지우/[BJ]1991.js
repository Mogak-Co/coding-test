const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift()

const tree = new Map()
let result = ''

for (let i = 0; i < N; i++) {
  const [root, left, right] = input[i].split(' ')
  tree.set(root, [left, right])
}

const preorder = (node) => {
  if (node === '.') return
  result += node
  preorder(tree.get(node)[0])
  preorder(tree.get(node)[1])
}

const inorder = (node) => {
  if (node === '.') return
  inorder(tree.get(node)[0])
  result += node
  inorder(tree.get(node)[1])
}

const postOrder = (node) => {
  if (node === '.') return
  postOrder(tree.get(node)[0])
  postOrder(tree.get(node)[1])
  result += node
}
preorder('A')
result += '\n'
inorder('A')
result += '\n'
postOrder('A')

console.log(result)
