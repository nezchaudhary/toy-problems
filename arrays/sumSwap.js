/* Sum Swap: Given 2 arrays of integers, find a pair of values (one from each array) that you can swap to give the two arrays the same sum */

// sum1 - a + b = sum2 + a - b
// sum1 - sum2 = 2a - 2b
// (sum1 - sum2) / 2 = a - b
// We can conclude that the division needs to be an even number or it wont exist


// This method uses sorting to save space O(a log a) + O (b log b) + O (a + b)
// We can do the same thing with brute force or using a hash map (faster but will use space) (O (a + b))
const numberSwap = (arr1, arr2) => {
  const sum1 = arr1.reduce((result, value) => result += value, 0);
  const sum2 = arr2.reduce((result, value) => result += value, 0);
  const difference = sum1 - sum2;
  if (difference % 2 !== 0) return null; 
  const target = difference / 2;
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  
  while (i < sortedArr1.length && j < sortedArr2.length) {
    const value = sortedArr1[i] - sortedArr2[j];
    if (value === target) {
      return [ sortedArr1[i], sortedArr2[j]];
    } else if (value < target) {
      i++;
    } else {
      j++;
    }
  }
  return null;
}

console.log(numberSwap([4, 1, 2,,1, 1, 2], [3, 6, 3, 3])); // [1, 3]
console.log(numberSwap([4, 1, 5], [3,7,2])); // [1, 2]