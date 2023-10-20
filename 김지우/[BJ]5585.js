const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString();

let price = +input;
let change = 1000 - price;
let count = 0;

while (change > 0) {
  if (change >= 500) {
    change -= 500;
    count++;
  } else if (change >= 100) {
    change -= 100;
    count++;
  } else if (change >= 50) {
    change -= 50;
    count++;
  } else if (change >= 10) {
    change -= 10;
    count++;
  } else if (change >= 5) {
    change -= 5;
    count++;
  } else {
    change -= 1;
    count++;
  }
}

console.log(count);
