/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/


const generateParenthesis = n => {
  const backtrack =  (result, curr, open, close, n) =>{
    if (curr.length === n * 2) {
      result.push(curr);
      return;
    }

    if (open < n) {
      backtrack(result, curr + '(', open + 1, close, n);
    }
    if (close < open)  {
      backtrack(result, curr + ')', open, close + 1, n);
    }
  }

  const result = [];
  backtrack(result, "", 0, 0, n);
  return result;
};

console.log('generate parenthesis', generateParenthesis(3));