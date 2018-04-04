/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


const subStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  for (let hayStackCharacter = 0; hayStackCharacter < haystack.length; hayStackCharacter++) {
    if (haystack[hayStackCharacter] === needle[0]) {
      let hayStackPointer = hayStackCharacter + 1;
      let needlePointer = 1;
      let match = true;
      while (hayStackPointer < haystack.length && needlePointer < needle.length && match) {
        if (haystack[hayStackPointer] !== needle[needlePointer]) {
          match = false;
        } else {
          hayStackPointer++;
          needlePointer++;
        }
      }
      if (needlePointer === needle.length) {
        return hayStackCharacter;
      }
    }
  }
  return -1;
};