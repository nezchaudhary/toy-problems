/*

236. Lowest Common Ancestor of a Binary Tree
Medium

2425

145

Favorite

Share
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]


 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 

Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.

*/

// Time Complexity O(n)
// Space Complexity O (n)
/*
Runtime: 68 ms, faster than 69.67% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
Memory Usage: 41.7 MB, less than 50.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
*/
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (left && right) {
    return root;
  }
  
  return left || right
};

// if both nodes don't exist in the tree

/*
Runtime: 72 ms, faster than 49.52% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
Memory Usage: 41.5 MB, less than 50.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
*/
const lowestCommonAncestor2 = (root, p, q) => {
  let ancestor = null;

  const findCommon = node => {
    if (!node) return false;
    
    const left = findCommon(node.left) ? 1 : 0;
    const right = findCommon(node.right) ? 1 : 0;
    const oneIsParent = node === p || node === q ? 1 : 0;

    if (left + right + oneIsParent >= 2) ancestor = node;

    return left + right + oneIsParent > 0;
  }
  findCommon(root);
  return ancestor;
}