function solution(today, terms, privacies) {
    var answer = [];
    var termObj = {}
    const toDay = new Date(today)
    terms.forEach((e) => {
        var [contract, term] = e.split(" ")
        termObj[contract] = Number(term)
    })
    privacies.forEach((e, idx) => {
        var [date, contract] = e.split(" ")
        var priDate = new Date(date)
        priDate.setMonth(priDate.getMonth() + termObj[contract])
        if(toDay >= priDate) {
            answer.push(idx+1)
        }
    })
    return answer;
}