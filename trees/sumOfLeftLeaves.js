/* 
Sum of Left Leaves
  Go to Discuss
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

*/

var isLeaf = (node) => {
  if (!node) return false;
  if (!node.left && !node.right) return true;
  return false;
}

var sumOfLeftLeaves = function(root, sum = 0) {
  if (root !== null) {
      if (isLeaf(root.left)) {
          sum += root.left.val;
      } else {
          sum += sumOfLeftLeaves(root.left);
      }
      
      sum += sumOfLeftLeaves(root.right);
  }
  return sum;
};