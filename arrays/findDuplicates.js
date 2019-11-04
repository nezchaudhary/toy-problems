/*

Find All Duplicates in an Array
Medium

1363

125

Favorite

Share
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

// Time Complexity O(n)
// Space Complexity O(1)
const findDuplicates = nums => {
  const duplicates = [];
for (let i = 0; i < nums.length; i++) {
  const position = Math.abs(nums[i]) - 1;
  if (nums[position] < 0) duplicates.push(position + 1);
  else nums[position] = -nums[position];
}

return duplicates;
};