/* 
Smallest Difference: Given two arrays of integers, compute the pair of values (oe value in each array) with the smallest non-negative difference. Return the difference

*/

const findSmallestDifference = (arr1, arr2) => {
  const ascending = (a, b) => a - b;
  arr1.sort(ascending);
  arr2.sort(ascending);
  let index1 = 0;
  let index2 = 0;
  let difference = Number.POSITIVE_INFINITY;

  while (index1 < arr1.length && index2 < arr2.length) {
    const diff = Math.abs(arr1[index1] - arr2[index2])
    if (diff < difference) {
      difference = diff;
    }
    if (arr1[index1] < arr2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }
  return difference;
}

console.log(findSmallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));