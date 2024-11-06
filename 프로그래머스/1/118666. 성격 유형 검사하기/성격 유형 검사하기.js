function solution(survey, choices) {
    var answer = '';
    const person = {
        'R' : 0, 'T' : 0,
        'C' : 0, 'F' : 0,
        'J' : 0, 'M' : 0,
        'A' : 0, 'N' : 0
    };
    const personality = ['RT', 'CF', 'JM', 'AN'];
    
    for(let i=0; i<survey.length; i++) {
        const choice = choices[i] - 4
        if(choice < 0) {
            person[survey[i][0]] += Math.abs(choice);
        }
        else if(choice >0) {
            person[survey[i][1]] += Math.abs(choice);
        }
    }
    for(let i=0; i<personality.length; i++) {
        const [x,y] = personality[i].split("");
        if(person[x] > person[y]) answer += x;
        else if(person[x] < person[y]) answer += y;
        else answer += x
    }
    return answer;
}