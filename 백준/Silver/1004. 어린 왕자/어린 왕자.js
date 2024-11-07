const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => v.split(" ").map(Number));
const N = input[0][0];
let idx = 1;
const answer = [];

for(let i=1; i<=N; i++) {
    const [x1,y1,x2,y2] = input[idx++];
    const num = input[idx++];
    let cnt = 0;
    
    for(let j=0; j<num; j++) {
        const [cx, cy ,r] = input[idx++];
        if((x1-cx)**2 + (y1-cy)**2 < r**2) cnt++;
        if((x2-cx)**2 + (y2-cy)**2 < r**2) cnt++;
        if((x1-cx)**2 + (y1-cy)**2 < r**2 && (x2-cx)**2 + (y2-cy)**2 < r**2) cnt-=2;
    }
    answer.push(cnt);
}
console.log(answer.join("\n"));