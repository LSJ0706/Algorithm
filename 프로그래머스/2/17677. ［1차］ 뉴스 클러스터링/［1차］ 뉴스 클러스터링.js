const sliceStr = (str,reg) => {
    const arr = [];
    for(let i=0; i<str.length-1; i++) {
        const word = str.slice(i,i+2);
        if(reg.test(word)) arr.push(word);
    }
    return arr
}

function solution(str1, str2) {
    let sub = 0;
    const reg = new RegExp(/^[a-z]*$/);
    
    const strArr1 = sliceStr(str1.toLowerCase(),reg);
    const strArr2 = sliceStr(str2.toLowerCase(),reg);
    
    for(let i=0; i<strArr1.length; i++) {
        if(strArr2.includes(strArr1[i])) {
            strArr2.splice(strArr2.indexOf(strArr1[i]),1);
            sub++;
        };
    }
    if(strArr1.length === 0 && strArr2.length === 0) return 65536
    else return parseInt(65536 * (sub / (strArr1.length + strArr2.length)));
}