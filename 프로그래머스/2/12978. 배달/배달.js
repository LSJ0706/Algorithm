function solution(N, road, K) {
    let answer = 0;
    const dist = new Array(N+1).fill(Infinity);
    const graph = {};
    
    dist[1] = 0;
    
    for(let i=0; i<N; i++) {
        graph[i+1] = [];
    }
    
    road.forEach((node) => {
        const [node1, node2, distance] = node;
        graph[node1].push([node2, distance]);
        graph[node2].push([node1, distance]);
    });
    

    const visit = [[1,0]];
    
    while(visit.length) {
        visit.sort((a,b) => a[1] - b[1]); 
        const [node, distance] = visit.shift();
        
        if(distance > K) continue;
        
        for(let [next, dis] of graph[node]) {
            const newDis = distance + dis;
            if(newDis < dist[next]) {
                dist[next] = newDis;
                visit.push([next, newDis]);
            }
        }
        
    }
    return dist.filter((v) => v <= K).length;
}