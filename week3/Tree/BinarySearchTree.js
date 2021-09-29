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

  BFS() {
    const queue = [this.root];
    const traverse = (queue) => {
      while (queue.length) {
        const node = queue.shift();
        console.log("current item is BST : ", node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    };
    traverse(queue);
  }
  DFS() {}

  /**
   *
   * @param {*} value
   * @returns
   *
   *  deletes a node from the tree
   *  logic :
   *    - target node is leaf - delete the node
   *    - if node has only one child -  delete the node & assign the child to parent
   *    - if two nodes then :
   */
  deleteNode(value) {
    if (!this.root) {
      console.log("The tree is empty");
      return null;
    }
    const removeNode = (node, val) => {
      // when node is equal to the value to be deleted
      if (val === node.value) {
        console.log("Node found");
        // check if only root node is present
        if (!node.right && !node.left) {
          return null;
        }
        // check if left child is present
        if (!node.right) {
          return node.left;
        }
        // check if only right child is present
        if (!node.left) {
          return node.right;
        }
        // both the child  present
        let temp = node.right;
        while (!node.left) {
          temp = temp.value;
        }
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
      }
      // when value is greater than the node value
      else if (value >= node.value) {
        node.right = removeNode(node.right, val);
        return node;
      }
      // when value is smaller than the node value
      else {
        node.left = removeNode(node.left, val);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
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
bst.BFS();
bst.deleteNode(9);
bst.BFS();
