/*
Missing Ranges
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

// Time Complexity O(n) // find values in one pass
// Space Complexity O(n) // create a copy of array. It would be O(1) if we can mutate
const findMissingRanges = (nums, lower, upper) => {
  const result = [];
  const values = [lower - 1, ...nums, upper + 1];
  for (let i = 1; i < values.length; i++) {
    if (values[i] === values[i - 1] + 1 || values[i] === values[i - 1]) {
      continue;
    }
    
    if (values[i] === values[i - 1] + 2 ) {
      result.push('' + (values[i - 1] + 1));
    } else {
      result.push([values[i - 1] + 1, values[i] - 1].join('->'));
    }
  }
  return result;
}