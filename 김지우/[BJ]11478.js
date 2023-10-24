const rl = require('readline').createInterface(process.stdin)

rl.on('line', (input) => {
  const set = new Set()

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      set.add(input.slice(i, j + 1))
    }
  }
  console.log(set.size)

  rl.close()
})
