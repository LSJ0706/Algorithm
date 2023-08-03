function solution(my_string, is_suffix) {
        var temp = [];

    for(let i=0; i<my_string.length; i++) {
        temp.push([...my_string].slice(i))
    }
    temp = temp.map(x=>x.join("")).sort()
    
    var answer = temp.find(x => x === is_suffix)
    return answer != undefined ? 1 : 0;
}