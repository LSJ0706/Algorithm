const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0]);
const numArr = input[1].split(" ").map((v) => parseInt(v));
const P = [...numArr].sort((a,b) => a-b);
const answer = new Array(T).fill(-1);
numArr.forEach((v,i) => {
    answer[i] = P.findIndex((el,idx) => {
        if(v === el && ! answer.includes(idx)) return true;
    })
})
console.log(answer.join(" "));