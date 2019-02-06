/*

Given a sorted array, remove the duplicates in -place such that each element appear only once and 
return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in -place
with O(1) extra memory.

Example:

Given nums = [1, 1, 2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.

*/


const removeDuplicates = (nums) => {
  let nextIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      nums[++nextIndex] = nums[i + 1];
    }
  }
  return ++nextIndex;
};

console.log(removeDuplicates([1])); // 1
console.log(removeDuplicates([1, 1])); // 1
console.log(removeDuplicates([1, 2])); // 2
console.log(removeDuplicates([1, 1, 2])); // 2 
console.log(removeDuplicates([1, 2, 3])); // 3
console.log(removeDuplicates([1, 2, 2])); // 2