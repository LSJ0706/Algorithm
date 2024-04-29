let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [M, N] = input[0].split(" ");
const arr = new Array(Number(M)).fill(0);
for (let x = 1; x <= Number(N); x++) {
  const [i, j, k] = input[x].split(" ").map((x) => Number(x));
  for (let y = i - 1; y < j; y++) {
    arr[y] = k;
  }
}
console.log(arr.join(" "));