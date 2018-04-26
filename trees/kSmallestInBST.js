/*
Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this 
is what you will be asked to accomplish in an interview.

A tree is considered a binary search tree(BST) if for each of its nodes the following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order.See examples for better 
understanding.

If t is

   3
 /   \
1     5
     / \
    4   6

    and k = 4, the output should be
kthSmallestInBST(t, k) = 5.

The values of t are [1, 3, 4, 5, 6], and the 4th smallest is 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] tree.integer t

A tree of integers. It is guaranteed that t is a BST.

Guaranteed constraints:
1 ≤ tree size ≤ 104,
-105 ≤ node value ≤ 105.

[input] integer k

An integer.

Guaranteed constraints:
1 ≤ k ≤ tree size.

[output] integer

The kth smallest value in t.


*/


//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

const kthSmallestInBST = (t, k) => {

  let result = null;
  const findK = (t, k) => {
    if (t == null)
      return k;
    k = findK(t.left, k);
    k--;
    if (k === 0) {
      result = t.value;
      return k;
    }

    if (result !== null) return k;
    
    k = findK(t.right, k);
    return k;
  };

  findK(t, k);
  return result;
  

  // space complexity O(n)
  // let stack = [];
  // while (stack.length > 0 || t !== null) {
  //   if (t !== null) {
  //     stack.push(t);
  //     t = t.left;
  //   } else {
  //     let lastNode = stack.pop();
  //     k--;
  //     if (k === 0) {
  //       return lastNode.value;
  //     }
  //     t = lastNode.right;
  //   }
  // }

  // return null;

};

