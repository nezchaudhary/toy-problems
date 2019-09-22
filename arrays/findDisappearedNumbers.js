/*

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
  // ideal array would be [1, 2, 3, 4 ...] upto nums.length;
  // easy answer is keep a hash map of occurences and then loop again to see which were not in the array
  // we have n to loop over and indexes + 1 as needed value
  // [4, 3, 2, 7, 8, 2, 3, 1]
  // [1, 2, 3, 4, 3, 2, 7, 8] // index + 1 is missing i.e 5, 6
  //
  //i = 0, 1
  // j = 3, 6, 2, 1
  // temp = 7, 3, 2, 3
  const result = [];
  let i = 0;

  //
  while(i < nums.length) {
    const expected = i + 1;
    if (nums[i] !== expected) {
      while (nums[i] !== i + 1) {
        let j = nums[i] - 1;
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        if (nums[j] === nums[i]) {
            break;
        }
        
      }
    }
    i++;
  }
  
  // go over sorted array and push missing values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log('disappeared numbers', findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));