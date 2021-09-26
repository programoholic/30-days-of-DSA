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
  // root-right-left
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
  inOrderTraversal() {
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
}
