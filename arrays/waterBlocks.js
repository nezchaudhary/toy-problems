/* 
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.


The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

const waterBlocks1 = function(height) {
  // constant to store max
  let waterBlocks = 0;
  // left wall
  let l = 0;
  // right wall
  let r = height.length - 1;
  // base case, before walls meet
  while(l < r)  {
    waterBlocks = Math.max(waterBlocks, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
        l++;
    } else {
        r--;
    }
  }
  return waterBlocks;
};

const waterBlocks2 = heights => {
  let current = 0;
  let result = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    if (heights[left] < heights[right]) {
      current = heights[left] * (right - left);
      left++;
    } else {
      current = heights[right] * (right - left);
      right--;
    }
    if (current > result) {
      result = current;
    }
  }
  return result;
}

console.log('water blocks 1 - ', waterBlocks1([1, 1]));
console.log('water blocks 2 - ', waterBlocks2([1, 1]));