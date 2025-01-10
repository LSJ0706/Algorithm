function solution(survey, choices) {
    let answer = '';
    const personality ={
        R:0, T:0,
        C:0, F:0,
        J:0, M:0,
        A:0, N:0
    };
    const personalityType = ["RT", "CF", "JM", "AN"];
    
    survey.forEach((v,idx) => {
        const [x, y] = v.split("");
        if(choices[idx] < 4) {
            personality[x] += (4 - choices[idx]);
        }else if(choices[idx] > 4) {
            personality[y] += (choices[idx] - 4);
        }
    })
    personalityType.forEach((v) => {
        const [x, y] = v.split("")
        if(personality[x] >= personality[y]) {
            answer += x;
        }else {
            answer += y;
        }
    })
    
    return answer;
}