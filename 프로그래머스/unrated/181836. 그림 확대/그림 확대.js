function solution(picture, k) {
    var answer = [];
    picture = picture.map((x) => {
        x = [...x].map((y => {return y.repeat(k)}))
        return x.join("")
    })

    for(let i=0; i<picture.length; i++) {
        var line = [];

        for(let j=0; j<k; j++) {
            line.push(picture[i])
        }
        answer = answer.concat(line)
    }
    return answer;
}