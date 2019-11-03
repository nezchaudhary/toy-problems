/*
  Find And Replace in String

To some string S, we will perform some replacement operations that replace groups of letters with new ones (not necessarily the same size).

Each replacement operation has 3 parameters: a starting index i, a source word x and a target word y.  The rule is that if x starts at position i in the original string S, then we will replace that occurrence of x with y.  If not, we do nothing.

For example, if we have S = "abcd" and we have some replacement operation i = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the original string S, we will replace it with "ffff".

Using another example on S = "abcd", if we have both the replacement operation i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x = "ec", y = "ffff", this second operation does nothing because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.

All these operations occur simultaneously.  It's guaranteed that there won't be any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources = ["ab","bc"] is not a valid test case.

Example 1:

Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
Output: "eeebffff"
Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
"cd" starts at index 2 in S, so it's replaced by "ffff".
Example 2:

Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]
Output: "eeecd"
Explanation: "ab" starts at index 0 in S, so it's replaced by "eee". 
"ec" doesn't starts at index 2 in the original S, so we do nothing.
Notes:

0 <= indexes.length = sources.length = targets.length <= 100
0 < indexes[i] < S.length <= 1000
All characters in given inputs are lowercase letters.
*/

const isStringAMatch = (s1, s2, i) => {
  let charCount = s2.length; 
  let j = 0;
  while (i <= s1.length && charCount > 0) {
    if (s1[i] !== s2[j]) {
        return false;
    }
    charCount--;
    i++;
    j++;
  }
  return true;
}

const findReplaceString = (S, indexes, sources, targets) => {
  if (!indexes.length) return S;
  if (!S) return '';
  
  // O (n)
  const toReplace = indexes.map((val, i) => {
    return {
      index: val,
      source: sources[i],
      target: targets[i],
    };
  }).sort((a, b) => a.index - b.index);
  
  let i = 0;
  let j = 0;
  let result = '';
  
  while (j < toReplace.length) {
    const replaceVals = toReplace[j];
    let k = replaceVals.index;
    
    // accumalate string until now
    while (i < k) {
      result += S[i];
      i++;
    }
    
    // check if its a match
    if (isStringAMatch(S, replaceVals.source, i)) {
      result += replaceVals.target;
      i += replaceVals.source.length;
    }
    j++;
    
  }
  
  result += S.slice(i);
  return result;
};

console.log(findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])) // 'eeebfff'
console.log(findReplaceString("vmokgggqzp", [3,5,1], ["kg","ggq","mo"], ["s","so","bfr"])); //"vbfrssozp"