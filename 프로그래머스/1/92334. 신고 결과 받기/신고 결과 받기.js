function solution(id_list, report, k) {
    const idMap = id_list.reduce((acc,cur) => {
        acc.set(cur, []);
        return acc
    },new Map());
    
    const setReport = new Set(report);
    
    const reportMap = [...setReport].reduce((acc,cur) => {
        const [reporting, reported] = cur.split(" ");
        idMap.get(reporting).push(reported);
        acc.set(reported, (acc.get(reported) || 0) +1);
        return acc;
    }, new Map());
    
    const answer = id_list.map((v) => {
        let cnt = 0;
        for(let i=0; i<idMap.get(v).length; i++) {
            if(reportMap.get(idMap.get(v)[i]) >= k) {
                cnt++;
            }
        }
        return cnt
    })
    return answer;
}