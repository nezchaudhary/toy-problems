/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

*/




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isSymmetric = (root, left, right) => {
  // check if root is defined case
  if (!root) return true;

  //define left and right if not defined
  if (left === undefined && right === undefined) {
    left = root.left;
    right = root.right;
  }

  // base case
  if (left === null && right === null) return true;

  if (left !== null && right !== null && left.val === right.val) {
    return isSymmetric(root, left.left, right.right) && isSymmetric(root, left.right, right.left);
  }
  return false;

};