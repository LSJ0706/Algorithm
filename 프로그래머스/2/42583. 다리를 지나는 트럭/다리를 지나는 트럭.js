function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = new Array(bridge_length).fill(0);
    
    while(bridge.length) {
        bridge.shift();
        if(truck_weights.length) {
            const bridge_weight = bridge.reduce((acc,cur) => acc+cur, 0);
            if(bridge_weight + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift());
            }else {
                bridge.push(0);
            }
        }
        answer++
    }
    return answer;
}