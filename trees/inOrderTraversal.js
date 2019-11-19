/*

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inOrderTraversalRecursive = (root, result = []) => {
  if (root !== null) {
    if (root.left) {
      inOrderTraversal(root.left, result);
    }
  
    result.push(root.val);
  
    if (root.right) {
      inOrderTraversal(root.right, result);
    }
  }
  return result;
}


var inOrderTraversalIterative = function(root) {
  const stack = [];
  const result = [];
  let curr = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};