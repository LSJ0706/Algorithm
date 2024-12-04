function solution(people, limit) {
    let answer = 0;
    people = people.sort((a,b) => a-b);
    let [left, right] = [0,people.length-1];
    while(left <= right) {
        if(people[left] + people[right] > limit) {
            right--;
            answer++;
        }else {
            right--;
            left++;
            answer++;
        }
    }
    return answer;
}