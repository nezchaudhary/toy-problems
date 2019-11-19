  /*
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/



const longestPalindromeSubsequence = s => {
  let s2 = s.split('').reverse();
  
  const dp = new Array(s.length + 1);
  for (let i = 0; i <= s.length; i++)
    dp[i] = new Array(s.length+1).fill(0);
  
  for (let i = 1; i <= s.length; i++){
    for (let j = 1; j <= s.length; j++){
      if(s[i - 1] === s2[j - 1])
        dp[i][j] = 1 + (dp[i - 1][j - 1]);
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[s.length][s.length];
};

console.log(longestPalindromeSubsequence('bbbab'));
console.log(longestPalindromeSubsequence('cbbd'));