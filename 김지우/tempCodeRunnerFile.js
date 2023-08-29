
  }
  return cnt;
};

let allNums = [];
for (let i = 111; i <= 999; i++) {
  allNums.push(i);
}

for (let turn of arr) {
  let [guess, strike, ball] = turn;
  allNums = allNums.filter((num) => getStrike(num, guess) === strike && getBall(num, guess) === ball);
}
return allNums.length;