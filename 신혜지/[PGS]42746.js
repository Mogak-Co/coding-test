function solution(numbers) {
  let answer = '';
  const str = numbers.map(num => num.toString());

  str.sort((a, b) => (b + a) - (a + b));
  answer = str.join('');

  return answer.startsWith('0') ? '0' : answer;
}

var a = [3, 30, 34, 5, 9];
console.log(solution(a));