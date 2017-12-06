/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function (string) {
  // i: a string
  // o: an array of all anagrams of the string
  // c: try to optimize time compleixity
  // e: empty string

  //result array
  const result = [];
  // for each value of string
  // add every other value of string by making sure we dont add the value at the current index
  // keep track of the index we started with and break the word there
  // if the starting index of the remaining values is the same as before
  // that means to say we already got that combination
  const loop = (string, word, used, result) => {
    for (let i = 0; i < string.length; i++) {
      if (!used[i]) {
        word += string[i];
        // word.push(string[i]);
        used[i] = true;
      } else {
        continue;
      }

      if (word.length !== string.length) {
        loop(string, word, used, result);
      } else if (word.length === string.length) {
        result.push(word);
        delete used[i];
        word = word.slice(0, word.length - 1);
        // word.pop();
      }
      delete used[i];
      word = word.slice(0, word.length - 1);
      // word.pop();
    }
  }

  loop(string, '', {}, result);
  return Array.from(new Set(result));
};

console.log(allAnagrams('abc'));
console.log(allAnagrams('abcd'));
console.log(allAnagrams('aacd'));