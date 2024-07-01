function solution(people, limit) {
    let answer = 0;
    let right = 0;
    let left = people.length - 1;
    people.sort((a,b) => b - a);
    
    while(right <= left) {
        if(people[right] + people[left] <= limit) {
            answer++;
            right++;
            left--;
        }else {
            answer ++;
            right++;
        }
    }
    return answer;
}