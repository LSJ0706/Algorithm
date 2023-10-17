function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    
    var report_list = id_list.reduce((acc, cur) => {
        acc[cur] = []
        return acc
    },{})
    
    report.map((x) => {
        const [user_id, report_id] = x.split(" ");
        if(!report_list[report_id].includes(user_id)) {
            report_list[report_id].push(user_id)
        }
    })
    for(const id in report_list){
        if(report_list[id].length >= k) {
            report_list[id].map((x) => {
                answer[id_list.indexOf(x)] += 1
            })
        }
    }
    return answer;
}