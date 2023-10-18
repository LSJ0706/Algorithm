let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
var Array = input[1].split(" ").map((x) => Number(x));
var MArray = input[3].split(" ").map((x) => Number(x));
Array = Array.reduce((acc, cur) => {
    acc.set(cur, 1)
    return acc
},new Map())
var answer = MArray.reduce((acc, cur) => {
    if (Array.get(cur) === 1) acc.push(1)
    else acc.push(0)
    return acc
},[])
console.log(answer.join(" "))
