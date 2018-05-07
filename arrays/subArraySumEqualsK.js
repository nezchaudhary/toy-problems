/*

Given an array of integers and an integer k, you need to find the total number of continuous 
subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

const subarraySum = (nums, k) => {
  let sum = 0;
  let count = 0;
  const sumMap = {};
  sumMap[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sumMap[sum - k]) {
      count += sumMap[sum - k];
    }
    sumMap[sum] ? sumMap[sum] += 1 : sumMap[sum] = 1;
  }
  return count;
};