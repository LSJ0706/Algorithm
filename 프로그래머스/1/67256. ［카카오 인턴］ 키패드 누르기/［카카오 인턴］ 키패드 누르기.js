function solution(numbers, hand) {
    let answer = '';
    let [Rhand, Lhand] = ["#","*"];
    const pad = {
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        '*':[3,0],
        0:[3,1],
        '#':[3,2]
    }
    numbers.forEach((v) => {
        if(v === 1 || v === 4 || v === 7) {
            answer += "L";
            Lhand = v;
        }else if (v === 3 || v === 6 || v === 9) {
            answer += "R";
            Rhand = v;
        }else {
            const Llen = Math.abs(pad[v][0]-pad[Lhand][0]) + Math.abs(pad[v][1]-pad[Lhand][1]);
            const Rlen = Math.abs(pad[v][0]-pad[Rhand][0]) + Math.abs(pad[v][1]-pad[Rhand][1]);
            if(Llen < Rlen) {
                Lhand = v;
                answer += "L";
            }else if(Llen > Rlen) {
                Rhand = v;
                answer += "R";
            }else {
                if(hand === "right") {
                    Rhand = v;
                    answer += "R";
                }else {
                    Lhand = v;
                    answer += "L";  
                }
            }
        }
    })
    return answer;
}