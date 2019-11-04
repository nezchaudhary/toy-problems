/*
Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/


const exists = (i, depth, node) => {
  let left = 0; let right = Math.pow(2, depth) - 1;
  for (let d = 0; d < depth; d++) {
    let mid = Math.floor((left + right) / 2);
    if (i <= mid) {
      node = node.left;
      right = mid;
    } else {
      node = node.right;
      left = mid + 1;
    }
  }
  return node !== null;
}

const computeDepth = root => {
  let d = 0;
  while (root.left !== null) {
    root = root.left;
    d++;
  }
  return d;
}

const countNodes = root => {
  if (root === null) return 0;
  
  const d = computeDepth(root);
  if (d === 0) return 1; // tree had only 1 node
  
  let left = 0;
  let right = Math.floor(Math.pow(2, d) - 1);
  let pivot;
  
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (exists(pivot, d, root)) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return Math.pow(2, d) - 1 + left;
};