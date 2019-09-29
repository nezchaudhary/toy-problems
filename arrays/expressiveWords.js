/*

Sometimes people repeat letters to represent extra feeling, such as 'hello' -> 'heeellooo', 'hi' -> 'hiiii'.  In these strings like 'heeellooo', we have groups of adjacent letters that are all the same:  'h', 'eee', 'll', 'ooo'.

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with 'hello', we could do an extension on the group 'o' to get 'hellooo', but we cannot get 'helloo' since the group 'oo' has size less than 3.  Also, we could do another extension like 'll' -> 'lllll' to get 'helllllooo'.  If S = 'helllllooo', then the query word 'hello' would be stretchy because of these two extension operations: query = 'hello' -> 'hellooo' -> 'helllllooo' = S.

Given a list of query words, return the number of words that are stretchy. 

 

Example:
Input: 
S = 'heeellooo'
words = ['hello', 'hi', 'helo']
Output: 1
Explanation: 
We can extend 'e' and 'o' in the word 'hello' to get 'heeellooo'.
We can't extend 'helo' to get 'heeellooo' because the group 'll' is not size 3 or more.
 

Notes:

0 <= len(S) <= 100.
0 <= len(words) <= 100.
0 <= len(words[i]) <= 100.
S and all words in words consist only of lowercase letters
 

*/

const compress = S => {
  let str = '';
  const count = [];

  // char[] ca = S.toCharArray();
  // int N = ca.length;
  let prev = -1;
  const strLength = S.length;
  for (let i = 0; i < strLength; i++) {
    if (i === strLength - 1 || S[i] != S[i + 1]) {
      str += S[i];
      count.push(i - prev);
      prev = i;
    }
  }
  return { count, str };
}

const expressiveWords = (S, words) => {
  const { count: mainStrCount, str: mainStr } = compress(S);
  let result = 0;
  for (let i = 0; i < words.length;i++) {
    const { count: currCount, str: currStr } = compress(words[i]);
    if (currStr !== mainStr) {
      continue;
    } else {
      let k = 0;
      while (k < mainStrCount.length) {
        const c1 = mainStrCount[k];
        const c2 = currCount[k];
        if (c1 < 3 && c1 !== c2 || c1 < c2) {
          break;
        } 
        k++;
      }
      if (k === mainStrCount.length) {
        result++;
      }
    }
  }
  return result;
}

console.log('expressive words', expressiveWords('heeellooo', ['hello', 'hi', 'helo']));
console.log('expressive words', expressiveWords(
  'dddiiiinnssssssoooo',
  ['dinnssoo','ddinso','ddiinnso','ddiinnssoo','ddiinso','dinsoo','ddiinsso','dinssoo','dinso']
))
