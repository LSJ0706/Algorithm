function solution(name, yearning, photo) {
    var map = new Map();
    for(let i=0; i<name.length; i++) {
        map.set(name[i], yearning[i])
    }
    
    var answer = photo.map((x) => {
        var score = x.reduce((acc,cur) => {
            if(map.get(cur) != undefined)
            acc = acc + map.get(cur)
            return acc;
        },0)
        return score;
    })
    return answer;
}