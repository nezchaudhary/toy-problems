/*

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

 

Example 1:



Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
 

Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const deleteNodesAndReturnForest = function(root, to_delete) {
  if (!root) return [];

  // create a map with deleted nodes
  const deleteMap = to_delete.reduce((result, val) => {
    result[val] = true;
    return result;
  }, {});
  
  const roots = [];
  
  const traverse = (root, deletedParent) => {
    if (root === null) return null;
    if (deletedParent && !deleteMap[root.val]) {
      roots.push(root);
    }
    
    const deleteMyself = deleteMap[root.val];
    
    root.left = traverse(root.left, deleteMyself);
    root.right = traverse(root.right, deleteMyself);
    return deleteMyself ? null : root;
  }
  traverse(root, true);
  return roots;
};