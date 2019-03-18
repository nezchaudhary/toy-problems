/*

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number. 
(See examples below to see what we mean here by the "first" duplicate).
If there are no such elements, return -1.
Note: Your solution should be O(n) runtime and O(1) space.

*/

const firstDuplicate = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let valueAtIndexOfCurrentValue = numbers[Math.abs(numbers[i])];
    if (valueAtIndexOfCurrentValue >= 0) {
      numbers[Math.abs(numbers[i])] = - valueAtIndexOfCurrentValue;
    } else if (valueAtIndexOfCurrentValue) {
      return Math.abs(numbers[i]);
    }
  }
  return -1;
} 
console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate([2, 4, 3, 1]));