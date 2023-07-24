function solution(players, callings) {
  const hash = new Map();

  players.forEach((name, index) => {
    hash.set(name, index);
  });

  callings.forEach(name => {
    const playerIdx = hash.get(name);
    const front = players[playerIdx - 1];

    [players[playerIdx], players[playerIdx - 1]] = [players[playerIdx - 1], players[playerIdx]];

    hash.set(name, hash.get(name) - 1);
    hash.set(front, hash.get(name) + 1);
  });

  return players;
}
