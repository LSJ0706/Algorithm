const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0] + "";
  const number = str.split("").map(Number);
  number.sort((a,b) => b-a);
  const answer = number.join("");
  console.log(answer);
  process.exit();
});