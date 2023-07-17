function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^[.]|[.]$/g, '');
  answer === '' && (answer = 'aaa');
  answer = answer.slice(0, 15).replace(/[.]$/, '');
  if (answer.length < 3) {
    answer = answer + answer[answer.length - 1].repeat(3 - answer.length);
  }
  return answer;
}
