
const getTargetSumPaths = (node, target, results = [], path = []) => {
  if (!node) {
    return results;
  }

  //base case if we reach a node with no left or right
  if (!node.left && !node.right) {
    if (target === node.value) {
      path.push(node.value);
      results.push(path.slice());
      path.pop();
    }
    return;
  }

  //if its greater, no point moving ahead, return to previous node
  if (node.value > target) return;

  //if value is less than target, add to path and continue to traverse depth first 
  if (node.value < target) {
    path.push(node.value);
    node.left ? getTargetSumPaths(node.left, target - node.value, results, path) : null;
    node.right ? getTargetSumPaths(node.right, target - node.value, results, path) : null;
  }
  //when done traversing this node, pop it off the path;
  path.pop();

  return results;
}

const BST = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


/*

Input -> Binary Tree
Output -> Nested array of paths from root to leaf that add to sum
Constraints --> None
Edge Case --> No paths that lead to sum --> return empty array
              If empty node --> return empty array


Strategy:
  Traverse left side first and then right side.
  Add nodes as you go to an path array as long as its not a leaf and less than current target
  Subtract current value from target as you go as its already in the path array
  If its a leaf, check if current target is equal to value, if yes, push path to result array
  else pop value and continue to find another path until whole tree is traversed

Transformation Steps: (target 22)
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
  
Result array --. [];
  Path array --> [];
  5: 5 < 22 and not a leaf. Add to path array --> [5], new target is 22 -5 = 17, traverse left
  4: 4 < 17 and not a leaf. Add to path array -> [5, 4], new target is 17 - 4 = 13, traverse left
  11: 11 < 13 and not a leaf. Add to path array --> [5, 4, 11], new target is 13 - 11 = 2, traverse left
  7: 7 < 2 is not true, it is a leaf. return to previous call that will traverse on right
  2: since this is a leaf, compate 2 === 2, its a valid path, push to path array --> [5, 4, 11, 2], push path to result array.
  pop the las

Big O : O(n) --> Have to visit every node at least once to the last leaf to find all paths that total to sum

const getTargetSumPaths = () => {
  base case, if leaf, check if target is equal to sum
  if yes, its a valid path, add value to path
  push copy of path to result array
  
  if value is greater than target, not a valid path, return
  
  if value is less, 
  could be a potential path, so add to path
  traverse depth first, left first recursively and then right after checking if the sides exist
  
  when done traversing this node completely, pop the value off
  
  return the result
}

*/


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
let l7 = new BST(5);
r6.right = l7;

console.log(getTargetSumPaths(root1, 22)); // --> [[5, 4, 11, 2], [5, 8, 4, 5]]
console.log(getTargetSumPaths(root1, 20)); // --> []
console.log(getTargetSumPaths(root1, 27)); // --> [[5, 4, 11, 7]]
