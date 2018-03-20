/*

Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

*/

const levelOrder = (root, result = [], depth = 0) => {
  if (root === null) return [];
  if (result.length === 0) result[depth++] = [root.val];
  if (root.left === null && root.right === null) return result;
  if (result[depth] === undefined) result[depth] = [];
  if (root.left) result[depth].push(root.left.val);
  if (root.right) result[depth].push(root.right.val);
  levelOrder(root.left, result, ++depth);
  levelOrder(root.right, result, depth);
  return result;
};