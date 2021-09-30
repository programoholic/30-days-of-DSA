/*
Given the root of a binary tree, return the level order traversal of its nodes' 
values. (i.e., from left to right, level by level).
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Leetcode link : https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */

function levelOrder(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const bfs = (nodeQueue) => {
    if (!nodeQueue.length) {
      return;
    }
    let child = [];
    let nextQueue = [];
    for (let node of nodeQueue) {
      child.push(node.val);
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    result.push(child);
    return bfs(nextQueue);
  };
  bfs([root]);
  return result;
}
