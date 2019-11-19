/*

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

*/
// Time Complexity O(n)
// Space Complexity O(n)
const diameterOfBinaryTree = root => {
  if (!root) return 0
  let max = 1;

  const dfs = (root) => {
    if (!root) return 0;

    const l = dfs(root.left)
    const r = dfs(root.right)

    // update ans, can use both children
    const sum = l + r + 1;
    max = Math.max(max, sum);
      

    // return longest path with only one child
    return Math.max(l, r) + 1;
  }

  dfs(root)
  return max - 1;
};