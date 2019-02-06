/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example:
Given binary tree[3, 9, 20, null, null, 15, 7],

  3
  / \
9  20
  /  \
15   7
return its depth = 3.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const maxDepth = (root) => {
  if (root === null) return 0;
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};