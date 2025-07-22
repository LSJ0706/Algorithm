function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    const queue = [];
    const queueTruck = [];
    let sum = 0;
    let cnt = 0;
    while(true) {
        if(queue[0] === bridge_length) {
            sum -= queueTruck.shift();
            queue.shift();
        }
        if(sum + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            sum += truck;
            queueTruck.push(truck);
            queue.push(0);
        }
        if(!queue.length) break;
        for(let i=0; i<queue.length; i++) {
            queue[i] += 1;
        }
        answer++;
    }
    return answer;
}