function solution(price, money, count) {
    const short = price*(count*(count+1)/2) - money;
    return  short > 0 ? short : 0;
}