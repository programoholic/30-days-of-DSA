/**\

Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the 
path equals targetSum.

A leaf is a node with no children.

 Link :   https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/537/

Example 1:

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false;
  const getPath = (node, curSum, len) => {
    if (!node) return;
    curSum += node.val;
    if (node.left === null && node.right === null) {
      // do something to check and return
      if (curSum === targetSum) {
        flag = true;
        return;
      }
    } else {
      if (flag) return;
      getPath(node.left, curSum, len);
      getPath(node.right, curSum, len);
    }
  };

  getPath(root, 0, 0);
  return flag;
};
