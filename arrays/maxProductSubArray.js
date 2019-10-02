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
  // store the result that is the max we have found so far
  let result = arr[0];
  let iMin = arr[0];
  let iMax = arr[0];

  // iMax/iMin stores the max/min product of
  // subarray that ends with the current number arr[i]
  for (let i = 1; i < arr.length; i++) {
    // multiplied by a negative makes big number smaller, small number bigger
    // so we redefine the extremums by swapping them
    if (arr[i] < 0) {  
      let temp = iMax;
      iMax = iMin;
      iMin = temp;
    }

    // max/min product for the current number is either the current number itself
    // or the max/min by the previous number times the current one
    iMax = Math.max(arr[i], iMax * arr[i]);
    iMin = Math.min(arr[i], iMin * arr[i]);

    // the newly computed max value is a candidate for our global result
    result = Math.max(result, iMax);
  }
  return result;
}