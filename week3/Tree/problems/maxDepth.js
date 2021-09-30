/**
 
Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is 
the number of nodes along the longest path from the root node down to the farthest leaf node.
 Input: root = [3,9,20,null,null,15,7]
Output: 3

link :  https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/535/
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};
