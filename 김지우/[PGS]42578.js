function solution(clothes) {
  let ans = 1,
    table = clothes.reduce((a, c) => {
      a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
      return a;
    }, {});
  for (let key in table) {
    ans *= table[key] + 1;
  }
  return ans - 1;
}
// a = 빈 객체{} 를 초기값으로
// {headgear : 1, eyewear : 1 ...} 처음엔 a[headgear] = 1 , 있으면 ++;
// 파츠별 아무것도 안입는 경우의 수이므로 파츠 수 + 1을 각각 해 준뒤 곱함
// 모든 파츠를 모두 안 입는 경우 하나 빼주기

function solution(clothes) {
  let ans = 1;
  let map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    let category = clothes[i][1];

    map.set(category, (map.get(category) || 0) + 1);
  }

  for (let count of map.values()) {
    ans *= count + 1;
  }

  return ans - 1;
}
// map 으로 깰끔히 풀어버리기
