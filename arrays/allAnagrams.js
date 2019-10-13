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

const allAnagrams = s => {
  // i: a string
  // o: an array of all anagrams of the string
  // c: try to optimize time compleixity

  const result = [];
  const str = s.split('');

  const loop = (arr, l, r) => {
    // e: empty string
    if (l === r) {
      result.push(arr.join(''));
    } else {
      for (let i = l; i <= r; i++) {
        [arr[i], arr[l]] = [arr[l], arr[i]];
        loop(arr, l + 1, r);
        [arr[i], arr[l]] = [arr[l], arr[i]];
      }
    }
  }

  loop(str, 0, s.length - 1);
  return result;

  // // for each value of string
  // // add every other value of string by making sure we dont add the value at the current index
  // // keep track of the index we started with and break the word there
  // // if the starting index of the remaining values is the same as before
  // // that means to say we already got that combination
  // const loop = (s, word, result, i) => {
  //   if (word.length === s.length) {
  //     result.push(word);
  //     return;
  //   }

  //   for (i; i < s.length; i++) {
  //     loop(s, word + s[i], result, i + 1);
  //   }
  // }

  // loop(s, '', result, 0);
  // return Array.from(new Set(result));
};

console.log(allAnagrams('abc'));
console.log(allAnagrams('abcd'));
console.log(allAnagrams('aacd'));