/*

Note: Your solution should have O(inorder.length) time complexity, since this is what you will be 
asked to accomplish in an interview.

Let's define inorder and preorder traversals of a binary tree as follows:

Inorder traversal first visits the left subtree, then the root, then its right subtree;
Preorder traversal first visits the root, then its left subtree, then its right subtree.
For example, if tree looks like this:

    1
   / \
  2   3
 /   / \
4   5   6
then the traversals will be as follows:

Inorder traversal: [4, 2, 1, 5, 3, 6]
Preorder traversal: [1, 2, 4, 3, 5, 6]

*/

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const restoreBinaryTree = (inorder, preorder) => {
  if (!preorder || !inorder) {
    return null;
  };

  if (preorder.length !== inorder.length) {
    return null;
  };

  const generate = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) {
      return null;
    }

    let root = new Tree(preorder[preStart]);
    let midpoint = -1;

    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === preorder[preStart]) {
        midpoint = i;
        break;
      }
    }

    if (midpoint === -1) {
      return null;
    }

    root.left = generate(preStart + 1, preStart + (midpoint - inStart), inStart, midpoint - 1)
    root.right = generate(preStart + (midpoint - inStart) + 1, preEnd, midpoint + 1, inEnd);

    return root;
  }
  return generate(0, preorder.length - 1, 0, inorder.length - 1);
};

console.log(restoreBinaryTree([4, 2, 1, 5, 3, 6], [1, 2, 4, 3, 5, 6]));
