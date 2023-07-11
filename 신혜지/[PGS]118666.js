function solution(survey, choices) {
  let answer = '';
  const { R, T, C, F, J, M, A, N } = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  choices.forEach((choice, i) => {
    if (choice <= 4) {
      mbti[survey[i][0]] += 4 - choice;
    } else {
      mbti[survey[i][1]] += choice - 4;
    }
  });

  answer += R >= T ? 'R' : 'T';
  answer += C >= F ? 'C' : 'F';
  answer += J >= M ? 'J' : 'M';
  answer += A >= N ? 'A' : 'N';

  return answer;
}