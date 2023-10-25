const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [str1, str2] = fs.readFileSync(filePath).toString().trim().split('\n');

// 최장 공통 부분 수열 => 원래의 순서를 지키면서 순서대로 나열한 수열 중 최장인 것
// 1. 둘 중 긴 문자열 = str1
// 2. str1의 길이만큼 반복문을 돌면서 str2의 문자열을 비교
// 3. str1의 문자열과 str2의 문자열이 같으면 dp[i][j] = dp[i-1][j-1] + 1
// 4. str1의 문자열과 str2의 문자열이 다르면 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
// 5. dp[str1.length][str2.length] 출력

//     C A P
//   0 0 0 0
// A 0 0 1 1
// C 0 1 1 1
// A 0 1 2 2

if (str1.length < str2.length) {
  [str1, str2] = [str2, str1];
}

const dp = Array.from(Array(str1.length + 1), () =>
  Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(dp[str1.length][str2.length]);
