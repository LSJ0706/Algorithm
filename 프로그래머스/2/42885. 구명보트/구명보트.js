function solution(people, limit) {
    var answer = 0;
    var sortPeople = people.sort((a,b) => a-b)
    while(sortPeople.length !== 0) {
        if(sortPeople[0] + sortPeople[sortPeople.length-1] <= limit) {
            answer ++
            sortPeople.pop()
            sortPeople.shift()
        }else {
            answer ++
            sortPeople.pop()
        }
    }
    return answer;
}