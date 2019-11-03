/*

Product of Array Except Self
Solution
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/


const productExceptSelf = nums => {

  const left = [];
  left[0] = 1;
  const right = [];
  right[nums.length - 1] = 1;
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));