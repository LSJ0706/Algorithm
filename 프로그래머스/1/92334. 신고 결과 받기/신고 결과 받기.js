function solution(id_list, report, k) {
    
    const reportList = id_list.reduce((acc,cur) => {
        acc.set(cur,0);
        return acc;
    },new Map());
    
    const idList = id_list.reduce((acc,cur) => {
        acc.set(cur,[]);
        return acc;
    },new Map());
    
    report.forEach((v) => {
        const [report, arrest] = v.split(" ");
        if(!idList.get(report).includes(arrest)) {
            idList.get(report).push(arrest);
            reportList.set(arrest, reportList.get(arrest)+1);
        }
    })
    
    const answer = id_list.reduce((acc,cur) => {
        let count = 0;
        idList.get(cur).forEach((v) => {
            if(reportList.get(v) >= k) count++
        })
        acc.push(count);
        return acc;
    },[])
    return answer;
}