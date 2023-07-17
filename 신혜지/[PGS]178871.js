function solution(players, callings) {
  const order = new Map();

  players.forEach((name, index) => {
    order.set(name, index);
})

  callings.forEach(name => {
    let index = order.get(name);
    let front = players[index - 1];
    [players[index], players[index - 1]] = [players[index - 1], players[index]];
    order.set(name, order.get(name) - 1);
    order.set(front, order.get(name) + 1);
  });

  return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));