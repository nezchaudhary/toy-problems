/*
CTCI: 10.3 Search in Rotated Array
Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order

Example:
Input: find 5 in { 15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array)

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

/*
2 passes
Find a rotation index rotation_index, i.e. index of the smallest element in the array. Binary search works just perfect here.
rotation_index splits array in two parts. Compare nums[0] and target to identify in which part one has to look for target.
Perform a binary search in the chosen part of the array.
*/



/*
// 1 pass
Initiate start to be equal to 0, and end to be equal to n - 1.

Perform standard binary search. While start <= end:

Take an index in the middle mid as a pivot.

If nums[mid] == target, the job is done, return mid.

Now there could be two situations:

Pivot element is larger than the first element in the array, i.e. the part of array from the first element to the pivot one is non-rotated.

If the target is in that non-rotated part as well: go left: end = mid - 1.

Otherwise: go right: start = mid + 1.

Pivot element is smaller than the first element of the array, i.e. the rotation index is somewhere between 0 and mid. That means that the part of array from the pivot element to the last one is non-rotated.

If target is in that non-rotated part as well: go right: end = mid + 1.

Otherwise: go left: start = mid - 1.

We're here because the target is not found. Return -1.
*/ 
// Time complexity : log(n)
// Space complexity : O(1)
const rotatedArraySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[low]) { // non rotated part of the array
      if (target >= nums[low] && target < nums[mid]) { // check if target in between that
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else { // rotated part of the array
      if (target <= nums[high] && target > nums[mid]) { // check if target is in between last and mid value
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

console.log('Rotated Array Search', rotatedArraySearch([4,5,6,7,0,1,2], 3)); // -1
console.log('Rotated Array Search', rotatedArraySearch([4,5,6,7,0,1,2], 0)); // 4
console.log('Rotated Array Search', rotatedArraySearch([2,2,2,3,4,2], 2)); // 2