// 합집합, 차집합, 교집합, 합집합 - 교집합(둘 중 하나에만 속한 원소)
// +     -      &      *
// 원소의 중복이 있을 수 있음

let test1 = '{a, b, c, d}+{a, c, e}'; // {a,b,c,d,e}
let test2 = '{a, b, c, d}-{a, c, e}'; // {b,d}
let test3 = '{a, b, c, d}&{a, c, e}'; // {a,c}
let test4 = '{a, b, c, d}*{a, c, e}'; // {b,d,e}
let test5 = '{a, b, c, d}+{a, c, c, e}-{d, e}&{a, c, e}*{a, b, e, e}';
// {b,c,e}

let sets = [];
let eles = [];

function parseSet(test) {
  let arr = [...test];
  let set = new Set();
  arr.forEach((char, i) => {
    if (char === '{') {
      set.add(arr[i + 1]);
    }
    if (char === ',') {
      set.add(arr[i + 2]);
    }
    if (char === '}' && arr[i + 1]) {
      eles.push(arr[i + 1]);
      sets.push(set);
      set = new Set();
    }
    if (char === '}' && !arr[i + 1]) {
      sets.push(set);
      set = new Set();
    }
  });
}
let res = parseSet(test5);
console.log(sets, eles);

let ans = sets[0];
eles.forEach((ele, i) => {
  if (ele === '+') ans = new Set([...ans, ...sets[i + 1]]);
  if (ele === '-') ans = new Set([...ans].filter((v) => !sets[i + 1].has(v)));
  if (ele === '&') ans = new Set([...ans].filter((v) => sets[i + 1].has(v)));
  if (ele === '*') {
    let all = new Set([...ans, ...sets[i + 1]]);
    let both = new Set([...ans].filter((v) => sets[i + 1].has(v)));
    ans = new Set([...all].filter((v) => !both.has(v)));
  }
});
console.log('{' + [...ans].sort().join(', ').trim() + '}');
