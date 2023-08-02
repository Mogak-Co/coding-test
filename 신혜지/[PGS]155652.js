function solution(s, skip, index) {
  let answer = '';
  let alphabet = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let skipAlphabet = alphabet.filter(v => !skip.includes(v));
  
  for (let i = 0; i < s.length; i++) {
    let sIndex = skipAlphabet.indexOf(s.charAt(i));
    answer += skipAlphabet[(sIndex + index) % skipAlphabet.length];
  }
  return answer;
}

const s = "aukks";
const skip = "wbqd";
const index =	5;
console.log(solution(s, skip, index));