function solution(participant, completion) {
  let answer = "";
  const obj = {};

  participant.forEach(item => (obj[item] = obj[item] ? obj[item] + 1 : 1));
  completion.forEach(item => (obj[item] -= 1));
  for (let i in obj) {
    if (obj[i] === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}
