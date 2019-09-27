/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/
// [1, 2, 5, 6, 7, 8, 9]
// [5, 7, 8, 9, 10]

// [3, 5, 9, 10, 11, 16]
// [4, 6, 8, 15]

// [4, 6,  8, 10, 11, 18]
// [3, 7, 9, 15, 18, 21, 25]

// [1, 3, 8, 9, 15]
// [7, 11, 18, 19, 21, 25]

// [2]
//[1, 3]
/*
  -Infinity (maxLeftX) | 2 (minRightX)
  1 (maxLeftY) | 3 (minRightY)
*/
// Time Complexity - O (log (min(m, n)))
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const x = nums1.length;
  const y = nums2.length;
  // start and end values of smaller size array
  let low = 0;
  let high = x;

  while (low <= high) {
    // midpoint of smaller array
    let partitionX = Math.floor((low + high) / 2);
  
    // calculate partition based on total values - partition X to balance both sides
    // plus one is to balance odd and even? ??
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) { // We are too far on right side, go more left.
      high = partitionX - 1;
    } else {
      low = partitionX + 1; // We are too far left, go on the right side
    }
  }
}

console.log('find median Sorted Arrays', findMedianSortedArrays([1, 3], [2]));
console.log('find median Sorted Arrays', findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]));
console.log('find median Sorted Arrays', findMedianSortedArrays([4, 6, 8, 10, 11, 18], [3, 7, 9, 15, 18, 21, 25]));
console.log('find median Sorted Arrays', findMedianSortedArrays([3, 5, 9, 10, 11, 16], [4, 6, 8, 15]));
console.log('find median Sorted Arrays', findMedianSortedArrays([1, 2, 5, 6, 7, 8, 9], [5, 7, 8, 9, 10]));
