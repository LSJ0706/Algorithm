function solution(n, wires) {
    const answer = [];
    
    const wireGraph = wires.reduce((acc, wire) => {
        const [sNode, aNode] = wire;
        if(acc[sNode] === undefined) acc[sNode] = [];
        if(acc[aNode] === undefined) acc[aNode] = [];
        acc[sNode].push(aNode);
        acc[aNode].push(sNode);
        return acc;
    },{});
    
    function BFS(node, exceptNode) {
        let cnt = 0;
        const visited = new Array(n+1).fill(false);
        const queue = [node];
        visited[node] = true;
        
        while(queue.length) {
            const visitNode = queue.shift();
            wireGraph[visitNode].forEach((v) => {
                if(!visited[v] && v !== exceptNode) {
                    visited[v] = true;
                    queue.push(v);
                }
            });
            cnt++;
        }
        return cnt;
    }
    
    wires.forEach((wire) => {
        const [sNode, aNode] = wire;
        answer.push(Math.abs(BFS(sNode, aNode) - BFS(aNode,sNode)));
    })
    
    return Math.min(...answer);
}