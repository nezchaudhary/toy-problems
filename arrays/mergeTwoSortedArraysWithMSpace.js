/*

Merge two sorted arrays with O(1) extra space
We are given two sorted array. We need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array. Extra space allowed in O(1).

Example:

Input:  ar1[] = {10};
        ar2[] = {2, 3};
Output: ar1[] = {2}
        ar2[] = {3, 10}  

Input:  ar1[] = {1, 5, 9, 10, 15, 20};
        ar2[] = {2, 3, 8, 13};
Output: ar1[] = {1, 2, 3, 5, 8, 9}
        ar2[] = {10, 13, 15, 20} 
        
*/


// shorter array extra space
const mergeTwoArraysWithFixedSpace = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;
  let arr1LastIndex = arr1.length - 1;
  let arr2LastIndex = arr2.length - 1;
  arr1.length = n + m;
  let lastIndex = arr1.length - 1;

  while (lastIndex >= 0 && arr2LastIndex >= 0) {
    if (arr1[arr1LastIndex] >= arr2[arr2LastIndex]) {
      arr1[lastIndex] = arr1[arr1LastIndex];
      arr1LastIndex--;
    } else {
      arr1[lastIndex] = arr2[arr2LastIndex];
      arr2LastIndex--;
    }
    lastIndex--;
  }

  while (arr1LastIndex >= 0) {
    arr1[lastIndex] = arr1[arr1LastIndex];
    lastIndex--;
    arr1LastIndex--;
  }

  return arr1;
}

// console.log(mergeTwoArraysWithFixedSpace([1, 5, 9, 10, 15, 20], [ 2, 3, 8, 13]));
console.log(mergeTwoArraysWithConstantSpace([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]));
