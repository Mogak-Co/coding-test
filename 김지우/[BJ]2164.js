const fs = require('fs')
const filePath =
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString()

let N = +input

class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.length++

        return newNode
    }
    getHead() {
        return this.head.data
    }
    removeHead() {
        this.head = this.head.next
        this.head.prev = null
        this.length--
    }
    getLength() {
        return this.length
    }
}

let list = new LinkedList()

for (let i = 1; i <= N; i++) {
    list.push(i)
}

while (list.getLength() > 1) {
    list.removeHead()
    list.push(list.getHead())
    list.removeHead()
}

console.log(list.getHead())
