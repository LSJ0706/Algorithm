function solution(book_time) {
    let answer = 0;
    const rooms = [];
    
    book_time.sort();
    book_time.forEach((time) => {
        const [startH, startM] = time[0].split(":").map(Number);
        const [endH, endM] = time[1].split(":").map(Number);
        const startTime = startH * 60 + startM;
        const endTime = endH * 60 + endM;
        const idx = rooms.findIndex((v) => v <= startTime);
        
        if(idx === -1) rooms.push(endTime+10);
        else rooms[idx] = endTime+10;
    })
    return rooms.length;
}