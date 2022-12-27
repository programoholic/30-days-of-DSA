class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  /**
   *
   * @param {*} data
   * @param {*} parentValue
   * @returns
   *  inserts a value in the tree
   ********************/
  insert(data, parentValue) {
    const node = new TreeNode(data);
    if (!this.root) {
      this.root = node;
    } else {
      const parent = this.findBFS(parentValue);
      if (parent) parent.children.push(node);
      else return "Tried to insert at root node while root already present";
    }
  }

  findBFS(parentValue) {
    let _node = null;
    this.traverseBFS((node) => {
      if (node.data === parentValue) {
        _node = node;
        return _node;
      }
    });
    return _node;
  }

  traverseBFS(cb) {
    if (!this.root) {
      return null;
    }
    const queue = [this.root];
    if (cb) {
      while (queue.length) {
        const node = queue.shift();
        cb(node);
        for (let child of node.children) {
          queue.push(child);
        }
      }
    }
  }
  traverseDFS(cb) {
    if (!this.root) {
      return null;
    }
    const queue = [this.root];
    if (cb) {
      while (queue.length) {
        const node = queue.shift();
        cb(node);
        queue.unshift(...node.children);
      }
    }
  }
  delete(node) {}
}

// const tree = new Tree();
// tree.insert(1);
// tree.insert(2, 1);
// tree.insert(3, 1);
// tree.insert(4, 2);
// tree.insert(5, 2);

// tree.traverseBFS((node) => {
//   console.log("current node item bfs: ", node.data);
// });
// tree.traverseDFS((node) => {
//   console.log("current node item in dfs : ", node.data);
// });

module.exports = { Tree };
