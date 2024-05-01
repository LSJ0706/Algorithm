let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());

for(let i=0; i<T; i++) {
    const str = input[i];
    console.log(str[0] + str.at(-1));
}