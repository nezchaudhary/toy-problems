/*

Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

 

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
 

Constraints:

1 <= s.length <= 10^5
2 <= k <= 10^4
s only contains lower case English letters.

*/



/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Time complexity O (n), where N is a string length.
// Space complexity O (n - d) where d is a total length for all duplicates.
const removeDuplicates = function (s, k) {
  const stack = []

  for (const char of s) {
    if (!stack.length)
      stack.push([char, 1])
    else if (stack[stack.length - 1][0] != char)
      stack.push([char, 1])
    else if (stack[stack.length - 1][1] < k - 1)
      stack[stack.length - 1][1] += 1
    else
      stack.pop()
  }

  const ans = []

  for (let i = 0; i < stack.length; i++) {
    let str = ''

    for (let j = 0; j < stack[i][1]; j++) {
      str += stack[i][0]
    }

    ans.push(str)
  }

  return ans.join('')
}

console.log(removeDuplicates('abcd', 2)); // abcd;
console.log(removeDuplicates('pbbcggttciiippooaais',2)); // ps;