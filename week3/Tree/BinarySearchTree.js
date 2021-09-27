// BST -> A tree where [left > root <= right]

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = node;
    } else this.insertNode(node, this.root);
  }
  insertNode(node, parent) {
    if (node.value < parent.value) {
      if (parent.left === null) {
        parent.left = node;
      } else {
        this.insertNode(node, parent.left);
      }
    } else {
      if (parent.right === null) parent.right = node;
      else this.insertNode(node, parent.right);
    }
  }
  search(value) {
    if (!this.root) {
      console.log("BST is empty");
      return null;
    }
    return this.searchNode(this.root, value);
  }
  searchNode(parentNode, value) {
    if (parentNode.value === value) {
      console.log("found it at : ", parentNode);
      return parentNode;
    }
    if (parentNode.left === null && parentNode.right === null) {
      console.log("Reached end! not found");
      return null;
    }
    if (value >= parentNode.value)
      return this.searchNode(parentNode.right, value);
    else return this.searchNode(parentNode.left, value);
  }
  BFS() {}
  DFS() {}
  deleteNode(value) {
    if (!this.root) {
      console.log("The tree is empty");
      return null;
    } else if (
      value === this.root.value &&
      (this.root.right || this.root.left)
    ) {
      console.log("tried to delete root when child is present");
    } else {
      return this.removeNode(this.root, value);
    }
  }
  removeNode(parent, value) {
    if (value >= parent.value) {
      if (parent.right === null) {
        console.log("Node not found!");
        return null;
      } else {
      }
    }
  }
  traverse() {}
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(8);
bst.insert(11);
bst.insert(14);
bst.insert(7);
bst.insert(9);
console.log(JSON.stringify(bst));
bst.search(11);
