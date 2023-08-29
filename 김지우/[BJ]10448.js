const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

const T = (n) => {
  return (n * (n + 1)) / 2;
};

let triArr = [];
for (let i = 1; T(i) <= 1000; i++) {
  triArr.push(T(i));
}

const isSumWithT = (s) => {
  for (first of triArr) {
    for (second of triArr) {
      for (third of triArr) {
        if (first + second + third === Number(s)) return 1;
      }
    }
  }
  return 0;
};
for (num of input) {
  console.log(isSumWithT(num));
}
// let ans = input.map(isSumWithT).join("\n");
// console.log(ans);
