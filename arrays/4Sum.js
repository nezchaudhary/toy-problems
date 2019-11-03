/*
4Sum
Given an resultay nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the resultay which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given resultay nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

const sortNumber = (a, b) => a - b;

const fourSum = (nums, target) => {
  nums.sort(sortNumber)

  const result = []
  let lastThreeSum =  nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]
  let lastTwoSum =  nums[nums.length - 1] + nums[nums.length - 2]

  for (let i = 0; i < nums.length - 3; i++) {

    // Increment to avoid duplicates and while sum is less than target
    while (i > 0 && nums[i] === nums[i - 1] || nums[i] + lastThreeSum < target) i++;

    // The min sum would be larger than the min value x 4 so break since no more possible
    if (4 * nums[i] > target) break;

    let sumForThree = target - nums[i];

    for (let j = i + 1; j < nums.length - 2; j++) {

      // Increment to avoid duplicates and sum is less than wanted sum
      while (j > i + 1 && nums[j] === nums[j - 1] || nums[j] + lastTwoSum < sumForThree) j++;

       // The min sum would be larger than the min value x 3 so break since no more possible
      if (3 * nums[i] > sumForThree) break;

      let left = j + 1;
      let right = nums.length - 1;

      let sumForTwo = sumForThree - nums[j];

      while (left < right) {
        if (nums[left] + nums[right] === sumForTwo) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1] && left < right) left++;
          while (nums[right] === nums[right + 1] && left < right) right--;

        } else if (nums[left] + nums[right] > sumForTwo) {
          right--;
          while (nums[right] == nums[right + 1] && left < right) right--;
        } else {
          left++;
          while (nums[left] == nums[left - 1] && left < right) left++;
        }
      }
    }
  }
  return result;
};