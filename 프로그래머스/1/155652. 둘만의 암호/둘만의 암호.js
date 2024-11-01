function solution(s, skip, index) {
    const answer = [];
    const alpha =  ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z',];
    const filter = alpha.filter((v) => !skip.includes(v));
    for(let i=0; i<s.length; i++) {
        let temp = filter.indexOf(s[i]);
        
        if(temp + index >= filter.length) temp = (temp+index)%filter.length;
        else temp = temp + index;
        
        answer.push(filter[temp]);
    }
    return answer.join("");
}
//alpha 26