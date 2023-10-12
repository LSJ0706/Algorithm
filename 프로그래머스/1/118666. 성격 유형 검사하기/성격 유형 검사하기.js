function solution(survey, choices) {
    var answer = '';
    var person = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0,
    }
    var category = ['RT', 'CF', 'JM', 'AN']
    for(let i=0; i<survey.length; i++) {
        if(choices[i] > 4) {
            person[survey[i].split("")[1]] += (choices[i] - 4)
        } else if(choices[i] < 4){
            person[survey[i].split("")[0]] += (4 - choices[i])
        }
    }
    category.forEach((e) => {
        if(person[e.split("")[0]] > person[e.split("")[1]]) {
            answer += e.split("")[0]
        } else if(person[e.split("")[0]] < person[e.split("")[1]]) {
            answer += e.split("")[1]
        } else {
            answer += e.split("").sort()[0]
        }
    })
    return answer;
}