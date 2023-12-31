function solution(answers) {
  let answer = [];
  let result1 = [1, 2, 3, 4, 5];
  let result2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let result3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (result1[i % 5] === answers[i]) score[0]++;
    if (result2[i % 8] === answers[i]) score[1]++;
    if (result3[i % 10] === answers[i]) score[2]++;
  }

  const max = Math.max(...score);
  for (let i = 0; i < 3; i++) {
    if (max === score[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

var a = [1,3,2,4,2];
console.log(solution(a));