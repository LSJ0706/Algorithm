function solution(x1, x2, x3, x4) {
    return intersection(union(x1, x2), union(x3, x4));
}

const union = (x,y) => {
    if (x==false && y==false) {
        return false;
    }else
    {
        return true;
    }
}

const intersection = (x,y) => {
    if (x==true && y==true) {
        return true;
    }else
    {
        return false;
    }
}