/* 

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

const maxProduct = arr => {
  let maxEndingHere = 1;
  let minEndingHere = 1;
  let maxSoFar = 1;
  let flag = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      maxEndingHere = maxEndingHere * arr[i];
      minEndingHere = Math.min(minEndingHere * arr[i], 1);
      flag = 1;
    } else if (arr[i] === 0) {
      maxEndingHere = 1;
      minEndingHere = 1;
    } else {
      const temp = maxEndingHere;
      maxEndingHere =  Math.max(minEndingHere * arr[i], i);
      minEndingHere = temp * arr[i];
      if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere; 
    }
  }
  if (flag === 0 && maxSoFar === 1)  {
    return 0
  }
  return maxSoFar; 
}