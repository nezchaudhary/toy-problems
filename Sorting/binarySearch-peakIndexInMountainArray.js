/*

Peak Index in a Mountain Array
Solution
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.

*/

// Time Complexity O(log n)
// Space Complexity O(1)
const peakIndexInMountainArray = A => {
  if (!A || A.length === 0) return -1;
  if (A.length === 1) return 0;
  let low = 0;
  let high = A.length - 1;
  let mid;
  
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (A[mid] < A[mid + 1]) {
        low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

console.log(peakIndexInMountainArray([3, 2, 1, 0])) // 0;
console.log(peakIndexInMountainArray([1, 2, 3, 4])) // 3;
console.log(peakIndexInMountainArray([1, 2, 4, 6, 5, 4, 3, 2, 1, 0])) // 3;