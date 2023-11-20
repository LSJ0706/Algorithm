function solution(str1, str2) {
    let answer = 0;
    const arr1 = [];
    const arr2 = [];
    const reg = /[^a-z]/
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for(let i=0; i<str1.length-1; i++) {
        if(!reg.test(str1.slice(i, i+2))) {
            arr1.push(str1.slice(i, i+2))
        }
    }
    for(let i=0; i<str2.length-1; i++) {
        if(!reg.test(str2.slice(i, i+2))) {
            arr2.push(str2.slice(i, i+2))
        }
    }
    
    const intersection = [];
    const tempArr1 = [...arr1];
    for(let i=0; i<arr2.length; i++) {
        if(tempArr1.indexOf(arr2[i]) >= 0) {
            intersection.push(arr2[i])
            tempArr1.splice(tempArr1.indexOf(arr2[i]),1)
        }
    }
    if(arr1.length === 0 && arr2.length === 0) {
        return 65536
    }else{
        return Math.floor((intersection.length/(arr1.length + arr2.length - intersection.length))*65536)
    }
}