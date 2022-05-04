class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  BFS() {
    let nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift();
      console.log(node.value);
      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }
  }
  inorderTravesal() {
    // left - root - right
    const traverse = (root) => {
      if (root.left) traverse(root.left);
      console.log(root.value);
      if (root.right) traverse(root.right);
    };
    traverse(this.root);
  }
}

const tree = new BinaryTree();
const node1 = new Node(10);
const node2 = new Node(4);
const node3 = new Node(140);
const node4 = new Node(15);
const node5 = new Node(53);
const node6 = new Node(65);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;
tree.BFS();
tree.inorderTravesal();
