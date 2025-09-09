function solution(book_time) {
    let answer = 0;
    const rooms = [];
    
    book_time.sort();
    book_time.forEach((time) => {
        const [start, end] = time;
        const [startH, startM] = start.split(":").map(Number);
        const [endH, endM] = end.split(":").map(Number);
        const startTime = (startH * 60) + startM;
        const endTime = (endH * 60) + endM;
        
        const idx = rooms.findIndex((room) => room <= startTime);
        if(idx === -1) rooms.push(endTime+10);
        else rooms[idx] = endTime+10;

    });
    return rooms.length;
}