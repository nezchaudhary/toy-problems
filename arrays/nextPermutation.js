/*
Next Permutation
Solution
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

// Time Complexity O(n)
// Space Complexity O(1)
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const reverse = (arr, i) => {
  let start = i;
  let end = arr.length - 1;
  while (start < end) {
      swap(arr, start, end);
      start++;
      end--;
  }
}

var nextPermutation = function(nums) {
  if (nums.length === 0) return nums;
  if (nums.length === 1) return nums;
  let i = nums.length - 2;
  let j = nums.length - 1;
  
  while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
  }
  
  if (i >= 0) {

      while (j >= 0 && nums[j] <= nums[i]) {
          j--;
      }
      swap(nums, i, j);
  }
  
  reverse(nums, i + 1);

  return nums;    
  
};