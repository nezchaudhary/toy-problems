/* Design an algorithm to find all pairs of integers within an array which sum to a specified value */

// Hash map solution with count has O(n) space and time but it can have duplicates


// This solution avoids duplicates
// O (n log n) + O(n) 
const findPairSums = (arr, sum) => {
  const result = [];
  const sorted = arr.sort((a, b) => a - b);
  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
    const currentSum = sorted[first] + sorted[last];
    if (currentSum === sum) {
      result.push([sorted[first], sorted[last]]);
      first++;
      last++;
    } else {
      if (currentSum < sum) first ++;
      else last--;
    }
  }
  return result;
};

console.log(findPairSums([-2, -1, 0, 3, 5, 6, 7, 9, 13, 14], 10));