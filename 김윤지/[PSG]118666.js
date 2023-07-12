function solution(survey, choices) {
  let data = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0
  };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      data[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] === 4) {
      continue;
    } else {
      data[survey[i][1]] += choices[i] - 4;
    }
  }

  let result = '';

  data['R'] >= data['T'] ? (result += 'R') : (result += 'T');
  data['C'] >= data['F'] ? (result += 'C') : (result += 'F');
  data['J'] >= data['M'] ? (result += 'J') : (result += 'M');
  data['A'] >= data['N'] ? (result += 'A') : (result += 'N');

  return result;
}
