const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0]);

for(let i=1; i<=T; i++) {
    const [N,M] = input[i].split(" ").map((v) => parseInt(v));
    const arr = Array.from(new Array(M).fill(1), (v,i) => i+1);
    const west = arr.slice(0,N).reduce((acc,cur) => acc*cur);
    const east = arr.slice(M-N,M).reduce((acc,cur) => acc*cur);
    console.log(Math.round(east / west));
}
