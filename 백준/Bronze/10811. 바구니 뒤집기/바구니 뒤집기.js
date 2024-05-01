let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
input.shift();
const arr = Array.from({ length: N }, (x, i) => i + 1);

for (let k = 0; k < M; k++) {
  const [i, j] = input[k].split(" ");
  const temp = arr.slice(i - 1, j).reverse();
  arr.splice(i - 1, j - i + 1, ...temp);
}
console.log(arr.join(" "));