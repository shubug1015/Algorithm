
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    heappush(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = (currentIndex / 2) >> 0;
        
        while (currentIndex > 1 && this.heap[parentIndex][1] > this.heap[currentIndex][1]) {
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex;
            parentIndex = (currentIndex / 2) >> 0;
        }
    }
    
    heappop() {
        const min = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1; 
        
        if(!this.heap[leftIndex]) return min;
        if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this.swap(leftIndex, currentIndex);
            }
            return min;
        }

        while (this.heap[leftIndex][1] < this.heap[currentIndex][1] || this.heap[rightIndex][1] < this.heap[currentIndex][1]) {
            const minIdx = this.heap[leftIndex][1] > this.heap[rightIndex][1] ? rightIndex : leftIndex;
            this.swap(minIdx, currentIndex);
            currentIndex = minIdx;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            
            if(leftIndex >= this.size()) break;
        }

        return min;
    }
}

function solution(jobs) {
  const count = jobs.length;
  const minHeap = new MinHeap();
  jobs.sort((a,b) => a[0]-b[0]);
  
  let time = 0;
  let complete = 0;
  let total = 0;
  
  while (jobs.length || minHeap.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.heappush(jobs.shift());
      } else break;
    }
    
    if (minHeap.size() && time >= complete) {
      const task = minHeap.heappop();
      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
  }
  
  return total / count >> 0;
}