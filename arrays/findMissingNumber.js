/*
Adobe - Arrays and Strings section
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

This problem includes 0 and the length of n.
*/


const missingNumber = nums => {
  // swapping;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i) {
    } else {
      while(nums[i] !==i) {
        const valIndex = nums[i];
        if (nums[i] === nums[valIndex]) {
          break;
        } else {
        const temp = nums[valIndex];
        nums[valIndex] = nums[i];
        nums[i] = temp;
        }
      }            
    }
    i++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i)  {
      return i;
    }
  }
  return i;
};

const missingNumberO1 = nums => {
  const expected = (nums.length * (nums.length + 1)) / 2;
  const sum = nums.reduce((total, val) => total + val, 0);
  return expected - sum;
}

console.log('find missing number', missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1], 8));
console.log('find missing number', missingNumber([3, 0, 1], 2));
console.log('find missing number', missingNumber([0], 1));
console.log('find missing number', missingNumber([1], 0));

console.log('find missing number', missingNumberO1([9, 6, 4, 2, 3, 5, 7, 0, 1], 8));
console.log('find missing number', missingNumberO1([3, 0, 1], 2));
console.log('find missing number', missingNumberO1([0], 1));
console.log('find missing number', missingNumberO1([1], 0));