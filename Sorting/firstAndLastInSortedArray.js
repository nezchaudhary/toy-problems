/*
Find First and Last Position of Element in Sorted Array
Solution
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target, low, high, result = [-1, -1]) {
  if (nums.length === 0) return [-1, -1];
  if (target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];
  if (low === undefined) low = 0;
  if (high === undefined) high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);
  if (low <= high) {
    // found target
    if (nums[mid] === target) {
      // if within bounds
      if (mid - 1 >= 0) {
        // found start
        if (nums[mid - 1] !== target) {
          result[0] = mid;
        } else {
          // go find start
          searchRange(nums, target, low, mid - 1, result);
        }
      } else {
        // if not in bounds, this must be start
        result[0] = 0;
      }
      
      if (mid + 1 < nums.length) {
        if (nums[mid + 1] !== target) {
          result[1] = mid;
        } else {
          searchRange(nums, target, mid + 1, high, result);
        }
      } else {
        result[1] = nums.length - 1;
      }
    } else if (nums[mid - 1] < target && nums[mid + 1] > target) {
        return result;
    } else if (nums[mid] < target) {
      searchRange(nums, target, mid + 1, high, result);
    } else {
      searchRange(nums, target, low, mid - 1, result);
    }
    
  }
  return result;
};

console.log('first and last in sorted array', searchRange([5,7,7,8,8,10], 8)); // [3, 4]