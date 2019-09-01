/* 
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValidParenthesis = s => {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  
  const pendingBrackets = [];
  
  for (let i = 0; i < s.length; i++) {
    if (/\(|\{|\[/.test(s[i])) {
      pendingBrackets.push(brackets[s[i]]);
    } else if (/\)|\}|\]/.test(s[i])) {
      const last = pendingBrackets.pop();
      if (s[i] !== last) {
        return false;
      }
    }
  }

  return pendingBrackets.length === 0;
};