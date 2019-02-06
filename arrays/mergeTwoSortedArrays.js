 /*

 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold 
additional elements from nums2. The number of elements initialized in nums1 and nums2 are m 
and n respectively.

 * @return { void} Do not return anything, modify nums1 in -place instead.
 */
 
const merge = (nums1, m, nums2, n) => {
  let lastIndex = (m + n) - 1;
  let lastNums1Index = m - 1;
  let lastNums2Index = n - 1;

  while (lastNums1Index >= 0 && lastNums2Index >= 0) {
    if (nums1[lastNums1Index] > nums2[lastNums2Index]) {
      nums1[lastIndex--] = nums1[lastNums1Index--];
    } else if (nums2[lastNums2Index] > nums1[lastNums1Index]) {
      nums1[lastIndex--] = nums2[lastNums2Index--];
    } else if (nums2[lastNums2Index] === nums1[lastNums1Index]) {
      nums1[lastIndex--] = nums2[lastNums2Index--];
      nums1[lastIndex--] = nums1[lastNums1Index--];
    }
  }

  while (lastNums1Index >= 0) {
    nums1[lastIndex--] = nums1[lastNums1Index--];
  }

  while (lastNums2Index >= 0) {
    nums1[lastIndex--] = nums2[lastNums2Index--];
  }

  // return nums1;
};