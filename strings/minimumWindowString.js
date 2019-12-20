/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const minWindow = function(s, t) {
  if (!t || !s || s.length < t.length) return '';
  const find = {};
  let required = 0;
  for (let i = 0; i < t.length; i++) {
    if (find[t[i]]) {
      find[t[i]]++
    } else {
      find[t[i]] = 1;
      required++;
    }
  }
  
  let left = 0;
  let right = 0;
  const found = {};
  let minLength = -1;
  let foundCount = 0;
  let minStart = 0;
  let minEnd = s.length;

  while (right < s.length) {
    const char = s[right];
    if (find[char]) {
      if (!found[char]) {
        found[char] = 1;
      } else {
        found[char]++;
      }
      if (find[char] === found[char]) {
        foundCount++;
      }

      while (left <= right && foundCount === required) {
        if (minLength === -1 || minLength > right - left + 1) {
          minLength = right - left + 1;
          minStart = left;
          minEnd = right;
        }

        found[s[left]]--;
        if (find[s[left]] && found[s[left]] < find[s[left]]) {
          foundCount--;
        }
        left++;
      }
    }
    right++;
  }

  if (minLength === -1) return ''; 
  
  let result = '';
  while (minStart <= minEnd) {
      result += s[minStart];
      minStart++
  }
  return result;
};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // 'ABC'
console.log(minWindow('aa', 'a')); // 'a'
console.log(minWindow('ab', 'a')); // 'a' 
console.log(minWindow('bba', 'ab')); // 'ba'
console.log(minWindow('a', 'a')); // 'a'
console.log(minWindow('aa', 'aa')); // 'aa'
