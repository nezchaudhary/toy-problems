// Begin your set-up revision for "hasPathSum()" here...
const hasPathSum = (tree, target, sum = 0) => {
  /* return a boolean if there a path that leads to the sum provided 
  as you go along
  
  this will be depth first search for a path from root to leaf
  
  time complexity is O(n) worst case because you might need
  to traverse the whole tree to find a path or if not found,
  we traversed the whole tree

  space complexity is O(1), however, the call stack is dependent on the 
  size of the BST. 

  assumption is path should be from root and should end at node
  that is a leaf (no left or right nodes
  */

  //add the value of the current node as we go until we hit a leaf 
  sum += tree.value;

  //if the condition above does not meet, check the left side
  //of node if it exists
  if (tree.left) {
    if (hasPathSum(tree.left, target, sum)) return true;
  }

  //then check the right side of node if it exists
  if (tree.right) {
    if (hasPathSum(tree.right, target, sum)) return true;
  }

  //check if we sum and target is a match at leaf with no more nodes to traverse
  if (tree.left === null && tree.right === null && sum === target) {
    return true;
  }

  // if sum wasn't a match return false
  return false;
}

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let root = new BST(10);
let l1 = new BST(5);
root.left = l1;
let r1 = new BST(20);
root.right = r1;
let l2 = new BST(4);
l1.left = l2;
let r2 = new BST(8);
l1.right = r2;
let r3 = new BST(30);
r1.right = r3;

console.log(hasPathSum(root, 19)) // true
console.log(hasPathSum(root, 15)) // false
console.log(hasPathSum(root, 23)) // true
console.log(hasPathSum(root, 60)) // true
console.log(hasPathSum(root, 80)) // false
console.log(hasPathSum(root, 20)) // false

let root1 = new BST(5);
let l3 = new BST(4);
root1.left = l3;
let r4 = new BST(8);
root1.right = r4;
let l4 = new BST(11);
l3.left = l4;
let l5 = new BST(7);
l4.left = l5;
let r5 = new BST(2);
l4.right = r5;
let r6 = new BST(4);
r4.right = r6;
let l6 = new BST(13);
r4.left = l6;
let r7 = new BST(1);
r6.left = r7;

console.log(hasPathSum(root1, 22)); // true
console.log(hasPathSum(root1, 100)); // false

let root2 = new BST(4);
console.log(hasPathSum(root2, 4)) //true
console.log(hasPathSum(root2, 5)) //false

// simple and modular solution
// const hasPathSum = function (node, targetSum) {
//   if (!node) return false;
//   if (!node.left && !node.right) return targetSum === node.val;
//   return hasPathSum(node.left, targetSum - node.val) || hasPathSum(node.right, targetSum - node.val);
// };