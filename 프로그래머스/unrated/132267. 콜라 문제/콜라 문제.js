function solution(a, b, n) {
    
    const cola = (temp, count, a, b) => {
        if(temp/a < 1) {
            return count
        }
        var newCola = Math.floor(temp/a) * b
        var left = temp % a
        return cola(newCola+left, newCola + count, a, b)
    }
    
    return cola(n, 0, a, b)
}