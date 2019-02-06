/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height - balanced binary tree is defined as a binary tree in which the depth of 
the two subtrees of every node never differ by more than 1.


Example:

Given the sorted array: [-10, -3, 0, 5, 9],

  One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height balanced BST:

0
  / \
-3   9
  / /
  - 10  5

  */

const sortedArrayToBST = (nums, low = 0, high = nums.length - 1) => {
  if (low > high) {
    return null;
  }

  let midpoint = Math.ceil((high + low) / 2);
  let tree = new TreeNode(nums[midpoint]);
  tree.left = sortedArrayToBST(nums, low, midpoint - 1)
  tree.right = sortedArrayToBST(nums, midpoint + 1, high);
  return tree;
};