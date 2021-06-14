class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
      this.items.push(item);
      console.log(`${item} pushed into the Stack!`)
  }

  pop() {
    this.items.splice(this.items.length - 1, 1);
  }

  itemAt(index) {
    if (this.items.length - 1 < index) {
      console.log("Stack does not have enough items");
    }
    console.log(this.items[index]);
    return this.items[index];
  }
  peek() {
    return this.item;
  }
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
  display() {
    this.items.forEach((item) => {
      console.log(item);
    });
  }
}

const stack = new Stack();
stack.isEmpty();
stack.push(5);
stack.push(15);
stack.push(25);
stack.push(55);
stack.display();
stack.pop();
stack.pop();
stack.display();
