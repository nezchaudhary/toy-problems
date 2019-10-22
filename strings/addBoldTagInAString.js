/*

Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
Example 1:
Input: 
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
Example 2:
Input: 
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
Note:
The given dict won't contain duplicates, and its length won't exceed 100.
All the strings in input have length in range [1, 1000].

*/

const addBoldTag = function(s, dict) {
  let boldLetters = new Array(s.length);
  boldLetters.fill(false);
  
  for (let word of dict) {
    let searchFrom = 0;
    let start = s.indexOf(word, searchFrom);

    while (start != -1) {
      for (let i = 0; i < word.length; i++) {
        boldLetters[start + i] = true;
      }

      searchFrom = start + 1;
      start = s.indexOf(word, searchFrom);
    }
  }
  
  let ans = '';
  for(let i = 0; i < s.length; i++){
    if (boldLetters[i]) {
      if (i === 0 || !boldLetters[i - 1]){
        ans += '<b>';
      }
      
      ans += s[i];
      
      if(i == s.length - 1 || !boldLetters[i+1]){
        ans += '</b>'
      }
    } else {
      ans += s[i];
    }
  }

  return ans;
};