function solution(elements) {
    let answer = 0;
    let len = elements.length;
    const set = new Set();
    for(let i=1; i<=len; i++) {
        let sum = 0;
        for(let j=0; j<len; j++) {
            if(j === 0) {
                for(let k=0; k<i; k++) {
                    sum += elements[k];
                }
            }else {
                sum -= elements[j];
                sum += elements[(j+i-1)%len];
            }
            set.add(sum);
        }
    }
    return set.size;
}