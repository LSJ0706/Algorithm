function solution(str1, str2) {
    const str1Arr = [];
    const str2Arr = [];
    const regal = /^[a-z]+$/;
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for(let i=0; i<str1.length-1; i++) {
        if(regal.test(str1.slice(i,i+2))) {
            str1Arr.push(str1.slice(i,i+2));
        }
    }
    
    for(let i=0; i<str2.length-1; i++) {
        if(regal.test(str2.slice(i,i+2))) {
            str2Arr.push(str2.slice(i,i+2));
        }
    }
    let union = 0;
    let intersection = 0; 
    const set = new Set([...str1Arr, ...str2Arr]);
    
    set.forEach((v) => {
        const atomic1 = str1Arr.filter((el) => el === v).length;
        const atomic2 = str2Arr.filter((el) => el === v).length;
        union += Math.max(atomic1, atomic2);
        intersection += Math.min(atomic1, atomic2);
    });
    
    return union === 0 ? 65536 : parseInt((intersection/union)*65536);
}