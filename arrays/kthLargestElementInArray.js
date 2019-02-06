/*

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

const findKthLargest = function (nums, k) {
  // // if you can sort
  // const sorted = nums.sort((a, b) => a - b);
  // return sorted[sorted.length - k];

  // if you cannot sort
  let largest;
  let visited = new Array(nums.length).fill(false);
  let currentLargest = [-1, Number.NEGATIVE_INFINITY];
  let count = 0;
  while (count < k) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= currentLargest[1] && !visited[i]) {
          currentLargest = [i, nums[i]];
      }
    }
    count++;
    largest = currentLargest[1];
    visited[currentLargest[0]] = true;
    currentLargest = [-1, Number.NEGATIVE_INFINITY];
  };
  return largest;
};

console.log(findKthLargest([1], 1)); // 1
console.log(findKthLargest([2, 1], 2)); // 1
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4