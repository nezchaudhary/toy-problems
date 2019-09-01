
/* 
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Two Pointer Trick
const threeSum1 = nums => {
  if (!nums) return [];
  if (nums.length < 3) return [];

  const sortedList = nums.sort((a, b) => a - b); // n(log n)
  const result = [];
  for (let i = 0; i < sortedList.length; i++ ) { // O (n)
    // if i is the same as the previous i value, keep moving to avoid duplicate sets
    if (i !== 0 && sortedList[i] === sortedList[i - 1]) continue;
    let j = i + 1;
    let k = sortedList.length - 1;

    while (j < k) { // O (k)
      const total = sortedList[i] + sortedList[j] + sortedList[k]; 
      if (total === 0) {
        result.push([sortedList[i], sortedList[j], sortedList[k]]);
        j++;
        // when you found a match, keep moving j as long as its a duplicate to avoid a duplicate subset
        while (j < k && sortedList[j] === sortedList[j - 1]) { // O (l)
          j++;
        }
      } else if (total < 0)  {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};