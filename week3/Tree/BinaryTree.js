class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data, nodeAt, position) {}

  DFSTraversal(type = "pre", cb) {
    switch (type) {
      case "pre":
        return preOrderTraversal(cb);
      case "in":
        return inOrderTraversal(cb);
      case "post":
        return postOrderTraversal(cb);
    }
  }
  // root-left-right
  preOrderTraversal(cb) {
    const current = this.root;
    const traverse = (node) => {
      cb(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
  }
  // left - root- right
  inOrderTraversal(cb) {
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      cb(node);
      if (node.right) traverse(node.right);
    };
    traverse(current);
  }
  // left - right - root
  postOrderTraversal() {
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      cb(node);
    };
    traverse(current);
  }

  preOrderTravsersalIterative() {
    if (!this.root) {
      return null;
    }
    const stack = [this.root];
    const result = [];
    while (stack.length) {
      let cur = stack.pop();
      result.push(cur.data);
      if (cur.right) stack.push(cur.right);
      if (cur.left) stack.push(cur.left);
    }
    return result;
  }
  inOrderTravsersalIterative() {
    const stack = [];

    let node = this.root;
    while (stack.length || node !== null) {
      if (node !== null) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        console.log("out put is L ", node.data);
        node = node.right;
      }
    }
  }
}

const tree = new BinaryTree();
const node1 = new TreeNode(10);
const node2 = new TreeNode(4);
const node3 = new TreeNode(140);
const node4 = new TreeNode(15);
const node5 = new TreeNode(53);
const node6 = new TreeNode(65);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;
// tree.BFS();
let b = [];
tree.inOrderTraversal((item) => {
  console.log(item.data);
  b.push(item.data);
});
console.log(b);
let a = tree.inOrderTravsersalIterative();
console.log(a);
tree.preOrderTraversal((item) => {
  console.log(item.data);
  b.push(item.data);
});
