/*

763. Partition Labels
Medium

1368

75

Favorite

Share
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

*/

const partitionLabels = s =>{
  const map = new Map(); // To store the last position of each char
  for (let i = s.length - 1; i >= 0; i--) {
    if (!map.has(s[i])) {
      map.set(S[i], i);
    }
  }
  const result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const temp = map.get(S[i]);
    if (end < temp) {
      end = temp;
    }
    
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};