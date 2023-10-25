function solution(numbers) {
  let answer = numbers
    .map((x) => x + '')
    .sort((a, b) => b + a - (a + b))
    .join('');
  return answer[0] === '0' ? '0' : answer; // '000' 일때 '0'으로 리턴
}
