function solution(new_id) {
    let answer = new_id.toLowerCase().replace(/[^a-z 0-9\._-]/g,"");
    answer = answer.replace(/\.{2,}/g, ".");
    answer = answer.replace(/^\.|\.$/g, "");
    if(answer == "") answer += "a"
    if(answer.length >= 16) answer = answer.substring(0,15).replace(/\.$/g,"");
    if(answer.length <= 2) answer = answer.padEnd(3,answer[answer.length-1]);
    
    return answer;
}