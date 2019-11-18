/*

Move all zeroes to end of array
Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

Example:

Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};

*/

const moveZerosToEnd = (integers) => {
  let index = 0;
  let zeros = 0;

  for (let value of integers) {
    if (value !== 0) integers[index++] = value;
    if (value === 0) zeros++;
  }

  while (index < integers.length && zeros) {
    integers[index++] = 0;
    zeros--;
  };

  return integers;
}

console.log(moveZerosToEnd([0, 1, 3, 7, 4, 0]));
console.log(moveZerosToEnd([0, 1, 0, 7, 4, 0]));
console.log(moveZerosToEnd([0, 0, 0, 0, 0]));
console.log(moveZerosToEnd([1, 2, 3, 4, 5]));