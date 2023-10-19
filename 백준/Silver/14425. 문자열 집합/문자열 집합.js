const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var [N, M]= input[0].split(" ").map((x) => Number(x))
var Ns = input.slice(1,N+1)
var Ms = input.slice(N+1)
const setNs = new Set(Ns)
var answer = 0;

Ms.forEach((s) => {
    if(setNs.has(s)) answer ++
});
console.log(answer)