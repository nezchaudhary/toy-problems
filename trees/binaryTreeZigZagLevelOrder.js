/*

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {

  // if null then return 
  if (root === null) { 
  return []; 
  } 

  // declare two stacks 
  const result = [];
  let currentLevel = [];
  let nextLevel = [];
  let leftToRight = true;

  // push the root 
  currentLevel.push(root); 

  // temp array to store level
  let level = [];

  // check if stack is empty 
  while (currentLevel.length > 0) { 

  // pop out of stack 
  const node = currentLevel.pop(); 
  level.push(node.val);

  // store data according to current 
  // order. 
  if (leftToRight) { 
    if (node.left != null) { 
    nextLevel.push(node.left); 
    } 
      
    if (node.right != null) { 
    nextLevel.push(node.right); 
    } 
  } 
  else { 
    if (node.right != null) { 
    nextLevel.push(node.right); 
    } 
      
    if (node.left != null) { 
    nextLevel.push(node.left); 
    } 
  } 

  if (currentLevel.length === 0) { 
    leftToRight = !leftToRight; 
    const temp = currentLevel; 
    currentLevel = nextLevel; 
    nextLevel = temp; 
    result.push(level);
    level = [];
  } 
  }
  return result;
};