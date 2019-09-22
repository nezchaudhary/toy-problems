/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
  // create a map to see if a character was already in the string
  // if you find it
  // check the length of character and store
  // have a start index
  // bump that from map
  // now you know you have all unique
  // keep going
    if (!s) return 0;
    if (s.length === 1) return 1;
    
    const stringMap = {};
    let currentIndex = 0;
    let longestSubstringLength = '';
    let substringStart = 0;
    while(currentIndex < s.length) {
        const char = s[currentIndex];
        if (stringMap[char] === undefined || stringMap[char] < substringStart) {
            stringMap[char] = currentIndex;
        } else {
            const currentLength = currentIndex - substringStart;
            if (currentLength > longestSubstringLength) {
                longestSubstringLength = currentLength;
            }
            const charPreviousIndex = stringMap[char];
            substringStart = charPreviousIndex + 1;
            stringMap[char] = currentIndex;
        }
        currentIndex++;
    }
    if (currentIndex - substringStart > longestSubstringLength) {
                longestSubstringLength = currentIndex - substringStart
            }
    return longestSubstringLength;
};

const lengthOfLongestSubstring2 = s => {
  let ans = 0;
  const indices = new Array(26);
  for (let i = 0, j = 0; j < s.length; j++) {
    const code = s.charCodeAt(j) - 97;
    i = Math.max(indices[code] || 0, i);
    const currLength = j - i + 1; // need to add 1 for length
    ans = Math.max(ans, currLength); // max between both lengths
    indices[code] = j + 1; // Add the next index because that would be the next value if found again.
  }
  return ans;
}

console.log(lengthOfLongestSubstring1('au'));
console.log(lengthOfLongestSubstring2('tmmuxt'));
console.log(lengthOfLongestSubstring2('abbcde'));
console.log(lengthOfLongestSubstring1(' '));
console.log(lengthOfLongestSubstring1('abcabcbb'));
console.log(lengthOfLongestSubstring1('bbtablud'));