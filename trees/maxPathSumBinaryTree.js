/*

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42 

*/

// Time Complexity - O(N) where n is the number of nodes, we need to visit each node.
// Space Complexity - O(log(N)). We have to keep a recursion stack of the size of the tree height which is O(log(N)) for a binary tree.
const maxPathSum = root => {
  if (!root) return 0;

  let ans = Number.MIN_SAFE_INTEGER;;

  const recursion = root => {
    // No node, value is 0
    if (!root) return 0;

    // get max path on left side
    const l = Math.max(0, recursion(root.left));

    // get max path on right side
    const r = Math.max(0, recursion(root.right));

    // update ans, can use both children
    const sum = l + r + root.val;

    // max sum
    ans = Math.max(ans, sum);

    // return longest path with only one child
    return Math.max(l, r) + root.val;
  }

  recursion(root);
  return ans;
}