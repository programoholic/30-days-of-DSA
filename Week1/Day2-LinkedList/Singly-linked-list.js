class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /************************************
   * 
   * @param {*} node
   * 
   * insert at end 
   **********************************/  
  insert(node) {
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      }
      this.size++;
    }

    deleteNode(posistion) {

        let current = this.head;
        let prev = this.head;
        if (!current) {
            console.log('List is empty');
            return false;
        } else {
            while (current) {
                if (current.data === data) {
                    if (current.next === null) {
                        
                    }
                }
            }
        }
        
    }
    /**
     *  Displays the list
     */
    displayList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    /**
     * 
     * @returns size of the linkedlist
     */
    size() {
        console.log(this.size);
        return this.size;
    }
}

const n = new Node(100);
const n2 = new Node(200);
const n3 = new Node(300);
const n4 = new Node(400);

const ll = new LinkedList();
ll.insert(n);
ll.insert(n2);
ll.insert(n3);
ll.insert(n4);
ll.displayList();
console.log(ll);
