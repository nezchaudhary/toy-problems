/*

Substring with Concatenation of All Words
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

 

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: []

*/


// Runtime: 1824 ms, faster than 11.67% of JavaScript online submissions for Substring with Concatenation of All Words.
// Memory Usage: 42.4 MB, less than 50.00% of JavaScript online submissions for Substring with Concatenation of All Words.
const createMap = words => {
  const map = new Map();
  let required = 0;
  for (let word of words) {
    const count = map.get(word) || 0;
    if (count === 0) required ++;
    map.set(word, count + 1);
  }
  return [required, map];
}

const checkFound = (currMap, wordMap, required, keys) => {
  const wordsFound = keys.reduce((result, key) => {
    if (currMap.get(key) === wordMap.get(key)) {
      return result + 1;
    }
    return result;
  }, 0);
  return required === wordsFound;
}


const findSubstring = (s, words) => {
  if (!s) return [];
  if (!words || words.length === 0) return [];
  const wordLength = words[0].length;

  const [required, wordMap] = createMap(words);
  const result = [];
  
  for (let i = 0; i < s.length; i++) {
    let currMap = new Map();
    let keys = [];
    for (let j = i; j < s.length; j += wordLength) {

      // current word to check
      const word = s.slice(j, j + wordLength);

      // add to current map if we want this word
      if (wordMap.get(word)) {
        let count = currMap.get(word);
        if (!count) {
          count = 0
          keys.push(word);
        }
        currMap.set(word, count + 1);

        if (keys.length === required && checkFound(currMap, wordMap, required, keys)) {
          result.push(i);
          currMap = new Map();
          keys = [];
          break;
        }

      } else {
        if (checkFound(currMap, wordMap, required, keys)) {
          result.push(i);
        }
        currMap = new Map();
        keys = [];
        break;
      }
    }
  }
  return result;
};

console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]))
console.log(findSubstring("barfoothefoobarman",["foo","bar"]))