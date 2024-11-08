const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0]);
for(let i=1; i<=T; i++) {
    let num = 1;
    const [a,b] = input[i].split(' ').map((v) => parseInt(v));
    for(let j=0; j<b; j++) {
        num = (num*a) % 10;
    }
    console.log(num === 0 ? 10 : num);
}
