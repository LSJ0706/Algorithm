function solution(a, b, c, d) {
    var arr = [a,b,c,d];
    var setArr = new Set(arr);
    switch([...setArr].length) {
        case 1:
            return 1111*a 
        case 2:
            if(a==b && b==c && a!=d) {return Math.pow((10*a+d), 2)}
            else if(a==c && c==d && a!=b) {return Math.pow((10*a+b), 2)}
            else if(a==b && b==d && a!=c) {return Math.pow((10*a+c), 2)}
            else if(b==c && c==d && b!=a) {return Math.pow((10*b+a), 2)}

            else if(a==b && c==d && a!=c) {return (a+c)*Math.abs(a-c)}
            else if(a==c && b==d && a!=b) {return (a+b)*Math.abs(a-b)}
            else if(a==d && b==c && a!=c) {return (c+d)*Math.abs(c-d)}
            
        case 3:
            if(a==b) {return c*d}
            else if(a==c) {return b*d}
            else if(a==d) {return b*c}
            else if(c==d) {return a*b}
            else if(b==c) {return a*d}
            else if(b==d) {return a*c}

        case 4:
            return Math.min(...setArr);
        }
}
