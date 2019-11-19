/*

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
jump length is 0, which makes it impossible to reach the last index.

*/

// Recursive solution with Backtracking
// Time Complexity O (2 ^ n)
// Space Complexity O(n) - recursion stack
const canJumpRecursive = nums => {
  const canJumpFromPositionRecursive = (position, nums) => {
    if (position == nums.length - 1) {
        return true;
    }

    const furthestJump = Math.min(position + nums[position], nums.length - 1);
    for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
        if (canJumpFromPositionRecursive(nextPosition, nums)) {
            return true;
        }
    }

    return false;
  }

  return canJumpFromPositionRecursive(0, nums);
};

const jumps = [];
  for (let i = 25000; i > 0; i--) {
    jumps.push(i);
  };

console.log('jumps', canJump(jumps));


// Dynamic Programming Top Down
// With Memoization
// Time Complexity O (n^2)
// Space Complexity O(1n) - memo table and recursion stack
const canJumpFromPositionMTopDown = (position, nums) => {
  if (memo[position] != 'Unknown') {
    return memo[position] == 'Good' ? true : false;
  }

  const furthestJump = Math.min(position + nums[position], nums.length - 1);
  for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
    if (canJumpFromPosition(nextPosition, nums)) {
          memo[position] = 'Good';
          return true;
    }
  }

  memo[position] = 'Bad';
  return false;
}

const canJumpTopDown = nums => {
  memo = new Array(nums.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = 'Unknown';
  }
  memo[memo.length - 1] = 'Good';
  return canJumpFromPositionMTopDown(0, nums);
}

// Dynamic Programming Bottom Up
const canJumpBottomUp = nums => {
  const memo = new Array(nums.length);
  for (let i = 0; i < memo.length; i++) {
      memo[i] = 'Unknown';
  }
  memo[memo.length - 1] = 'Good';

  for (let i = nums.length - 2; i >= 0; i--) {
      const furthestJump = Math.min(i + nums[i], nums.length - 1);
      for (let j = i + 1; j <= furthestJump; j++) {
          if (memo[j] == 'Good') {
              memo[i] = 'Good';
              break;
          }
      }
  }

  return memo[0] == 'Good';
}

// Greedy Solution
// Time Complexity O(n)
// Space Complexity O(1)
const canJumpGreedy = nums => {
  let lastPos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos === 0;
}