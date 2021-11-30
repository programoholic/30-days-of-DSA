class MinHeap {
  constructor(heapSize) {
    this.heapsize = heapSize;
    this.heap = []; //new Array(heapSize+1);
    this.realSize = 0;
    this.heap[0] = "X";
  }
  add(element) {
    this.realSize++;
    if (this.reaSize > this.heapSize) {
      this.realSize--;
      throw new Error("Heap size limit exceeded");
      return;
    }
    this.heap[this.realSize] = element;
    let index = this.realSize;
    let parent = Math.floor(index / 2);
    while (index > 1 && this.heap[index] < this.heap[parent]) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[parent];
      this.heap[parent] = temp;
      index = parent;
      parent = Math.floor(index / 2);
    }
  }
  pop() {
    if (this.realSize < 1) {
      throw new Error("Heap is empty!");
      return;
    }

    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.realSize];
    let index = 1;
    this.realSize--;

    while (index < this.realSize && index <= Math.floor(this.realSize / 2)) {
      let left = index * 2;
      let right = index * 2 + 1;
      if (
        this.heap[index] > this.heap[right] ||
        this.heap[index] > this.heap[left]
      ) {
        if (this.heap[left] < this.heap[right]) {
          let temp = this.heap[left];
          this.heap[left] = this.heap[index];
          this.heap[index] = temp;
          index = left;
        } else {
          let temp = this.heap[right];
          this.heap[right] = this.heap[index];
          this.heap[index] = temp;
          index = right;
        }
      }
    }
    return deletedItem;
  }
  display() {
    for (let item of this.heap) {
      console.log("min heap item : ", item);
    }
  }
}

const minHeap = new MinHeap(20);
minHeap.add(10);
minHeap.add(120);
minHeap.add(20);
minHeap.add(40);
minHeap.add(30);
console.log(minHeap.pop());

minHeap.display();
