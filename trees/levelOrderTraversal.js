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
  // it is an empty tree
  if (root === null) return [];

  // root level. Add at 0 index
  if (result.length === 0) result[depth++] = [root.val];

  // No other nodes except root
  if (root.left === null && root.right === null) return result;

  //
  if (result[depth] === undefined) result[depth] = [];

  // Depth is now already at index to push value at. Push left value
  if (root.left) result[depth].push(root.left.val); // shouldn't we increment?

  // push right value
  if (root.right) result[depth].push(root.right.val); // increment??
  
  levelOrder(root.left, result, ++depth);
  levelOrder(root.right, result, depth);
  return result;
};