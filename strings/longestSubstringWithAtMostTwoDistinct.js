/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.

*/
// Sliding Window
// Time Complexity O(n) // one pass
// Space Complexity O(1) // never storing more than 2 values
const lengthOfLongestSubstringTwoDistinct = s => {
  if (!s) return 0;
  if (s.length === 1) return 1;
  let left = 0;
  let right = 0;
  const distinct = new Map();;
  let maxLength = 0;
  
  while (right < s.length) {
    const char = s[right];
    if (distinct.size < 3) {
      distinct.set(char, right);
    }

    if (distinct.size === 3) {
      maxLength = Math.max(right - left, maxLength);
      let min = Number.POSITIVE_INFINITY;
      let remove;
      for (let [key, value] of distinct) {
        if (min > value) {
          min = value;
          remove = key;
        }
      }
      left = min + 1;
      distinct.delete(remove);
      maxLength = Math.max(right - left, maxLength);
    }
    right++;
  }
  return Math.max(maxLength, right - left);
};

console.log(lengthOfLongestSubstringTwoDistinct('eceba')); // 3
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb')); // 5
console.log(lengthOfLongestSubstringTwoDistinct('abaccc')); // 4