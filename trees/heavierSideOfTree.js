/*

Suppose you're given a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] represents the following binary tree where -1 is a non-existent node.

Write a function that determines whether the left or the right branch is larger. The size of each branch is the sum of the node values. The function should return the string "Right" if the right side is larger and "Left" if the left side is larger. If the tree has 0 nodes or if the size of the branches are equal, return the empty string.

Example
[3, 6, 2, 9, -1, 10] // "Left"
[1, 4, 100, 5] // "Right"
[1, 10, 5, 1, 0, 6] // ""
[] // ""
[1] // "" 
  
  
  // [3, 6, 2, 9, -1, 10];
  //[1, 10, 5, 1, 0 6, 5, 2, 3, 4, 5, 1, -1, 4, 7]
  //     ^     ^  ^       ^  ^  ^  ^
  /* 
                                  1
          10                                          5
      1        0                                    6        5
    2    3    4     5                            1      -1  4     7
  
  
  */
  // . 0 1  2  3   4  5
const sum = (arr, i) => {
  // within bounds
  if (i - 1 < arr.length) {
    
    // make zero if no node
    if (arr[i - 1] === -1) return 0;
    
    // current sum + left sum of parent and then right sum of parent
    return arr[i - 1] + sum(arr, i * 2) + sum(arr, i * 2 + 1);
  }
  return 0;
};

const heavierSide = (arr) => {
  if (!arr) return '';
  if (arr.length === 0 || arr.length === 1) return 'Equal';
  
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  if (left === right) return 'Equal';
  return left > right ? 'Left' : 'Right';
}

console.log(heavierSide([3, 6, 2, 9, -1, 10])) // 'Left'
console.log(heavierSide([1, 4, 100, 5])) // 'Right'
console.log(heavierSide([1, 10, 5, 1, 0, 6])) // 'Equal'
console.log(heavierSide([])) // 'Equal'
console.log(heavierSide([1])) // 'Equal'
