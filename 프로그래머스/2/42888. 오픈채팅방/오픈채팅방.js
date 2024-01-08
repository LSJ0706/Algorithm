function solution(record) {
    const answer = [];
    const obj = {};
    record.forEach((chat) => {
        const [enter, uid, name] = chat.split(" ");
        if(enter == "Enter") {
            obj[uid] = name;
            answer.push(uid + "님이 들어왔습니다.")
        }else if(enter == "Leave"){
            answer.push(uid + "님이 나갔습니다.")
        }else {
            obj[uid] = name;
        }
    })
    for(let i=0; i<answer.length; i++) {
        const uid = answer[i].split("님이")[0];
        answer[i] = answer[i].replace(uid, obj[uid])
    }
    return answer;
}