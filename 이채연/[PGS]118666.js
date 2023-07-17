function solution(survey, choices) {
  const type = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      type[survey[i][1]] += choices[i] - 4;
    } else if (choices[i] < 4) {
      type[survey[i][0]] += 4 - choices[i];
    } else {
      continue;
    }
  }

  let arr = Object.entries(type);
  let answer = '';

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i - 1][1] >= arr[i][1]) {
      answer += arr[i - 1][0];
    } else {
      answer += arr[i][0];
    }
  }
  return answer;
}
