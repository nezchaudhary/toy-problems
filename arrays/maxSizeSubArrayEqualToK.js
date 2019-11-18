/*

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  // want the largest size of the subarray
  // needs to add up to a target value
  // not concerned with the values themselves
  if (nums === null || nums.length === 0) return 0;
  let sum = 0;
  let sumHashMap = {};
  let maxSizeSubArray = 0;
  sumHashMap[sum] = -1;

  //[0, 1, 0, 5, 3, 6];
  //[0, -2, -3, -1, 0];
  for (let i = 0; i < nums.length; i++) {
    let current = sum += nums[i];
    if (sumHashMap[current - k] !== undefined) {
      maxSizeSubArray = Math.max(maxSizeSubArray, i - sumHashMap[current - k]);
    }

    if (sumHashMap[current] === undefined) sumHashMap[current] = i;
  }
  return maxSizeSubArray;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); // 4
console.log(maxSubArrayLen([-2, -1, 2, 1], 1)); // 2
console.log(maxSubArrayLen([1, 0, -1], -1)); // 2
console.log(maxSubArrayLen([-2,1,-3,4,-1,2,1,-5,4], 0)); // 4