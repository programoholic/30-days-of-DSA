class MaxHeap {
  constructor(heapSize) {
    this.heapSize = heapSize;
    this.heap = []; //new Array(heapSize+1);
    this.realSize = 0;
    this.heap[0] = "X";
  }

  add(element) {
    this.realSize++;
    if (this.realSize > this.heapSize) {
      this.realSize--;
      throw new Error("Heap size is full");
      return;
    }
    this.heap[this.realSize] = element;
    let index = this.realSize;
    let parent = Math.floor(index / 2);

    while (index > 1 && this.heap[index] > this.heap[parent]) {
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

    let deletedElement = this.heap[1]; // deltet the first element
    let index = 1;
    this.heap[index] = this.heap[this.realSize];
    this.realSize--;
    while (index < this.realSize && index <= Math.floor(index / 2)) {
      let left = index * 2;
      let right = index * 2 + 1;
      if (
        this.heap[index] < this.heap[right] ||
        this.heap[index] < this.heap[left]
      ) {
        if (this.heap[left] > this.heap[right]) {
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
    return deletedElement;
  }
  display() {
    for (let item of this.heap) {
      console.log("max heap item : ", item);
    }
  }
}

// const maxHeap = new MaxHeap(20);
// maxHeap.add(10);
// maxHeap.add(120);
// maxHeap.add(20);
// maxHeap.add(40);
// maxHeap.add(30);
// console.log(maxHeap.pop());

// maxHeap.display();

module.exports = { MaxHeap };
