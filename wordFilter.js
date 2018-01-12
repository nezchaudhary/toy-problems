/* Given many words, words[i] has weight i.

Design a class WordFilter that supports one function, 
WordFilter.f(String prefix, String suffix). It will return the word with 
given prefix and suffix with maximum weight. If no word exists, return -1.

Examples:
Input:
WordFilter(["apple"])
WordFilter.f("a", "e") // returns 0
WordFilter.f("b", "") // returns -1
Note:
words has length in range[1, 15000].
For each test case, up to words.length queries WordFilter.f may be made.
  words[i] has length in range[1, 10].
    prefix, suffix have lengths in range[0, 10].
      words[i] and prefix, suffix queries consist of lowercase letters only.


*/


const WordFilter = function (words) {
  this.words = words;
}

WordFilter.prototype.f = function (prefix, suffix) {
  for (let i = this.words.length - 1; i >= 0; i--) {
    let word = this.words[i];
    let j = 0;
    let k = word.length - 1;
    let foundPrefix = foundSuffix = false;
    while (k > j && (!foundPrefix && !foundSuffix)) {
      if (word[j] === prefix || word[j] === ' ') foundPrefix = true;
      if (word[k] === suffix || word[k] === ' ') foundSuffix = true;
      k--;
      j++;
    }
    if (foundPrefix && foundSuffix) {
      return i;
    } else {
      foundPrefix = foundSuffix = false;
    }
  }
  return -1;
}


let example = new WordFilter(['apple']);
let result1 = example.f('a', 'e');
let result2 = example.f('b', '');
console.log('result1', result1); // 0 
console.log('result2', result2); // -1