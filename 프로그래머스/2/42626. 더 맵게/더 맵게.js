class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        
        while(
            currentIndex > 0 &&
            this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) /2)] 
        ) {
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1)/2)];
            this.heap[Math.floor((currentIndex - 1)/2)] = temp;
            currentIndex = Math.floor((currentIndex - 1)/2);
        }
    }
    
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        
        while(currentIndex*2+1 < this.heap.length) {
            let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;
            
            if(this.heap[currentIndex] < this.heap[minChildIndex]) {
                break;
            }
            
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            currentIndex = minChildIndex;
        }
        return minValue;
    }
    
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, k) {
    const minHeap = new MinHeap();
    for(const sc of scoville) {
        minHeap.push(sc);
    }
    
    let mixedCount = 0;
    
    while(minHeap.size() >= 2 && minHeap.peek() < k) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixedSc = first + second * 2;
        minHeap.push(mixedSc);
        mixedCount++;
    }
    
    return minHeap.peek() >= k ? mixedCount : -1;
}