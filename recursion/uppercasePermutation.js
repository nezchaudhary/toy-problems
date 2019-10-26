/*

Given a string with lower case characters, find all permutations of the string with lower case and upper case characters
Input: 'abc'
output: ['ABC', 'ABc', 'AbC', 'aBC', 'Abc', 'aBc', 'abc', 'abC']
*/

const stringPermutations = (s, i = 0, result = [], curr = '') => {
  if (s.length === 0) return [];
  if (s.length === 1) return [s[0], s[0].toUpperCase()];
  if (i === s.length) {
    result.push(curr);
    return;
  }

  stringPermutations(s, i + 1, result, curr + s[i]);
  stringPermutations(s, i + 1, result, curr + s[i].toUpperCase());
  return result;
} 

console.log(stringPermutations('')) // [];
console.log(stringPermutations('a')) // ['a', 'A'];
console.log(stringPermutations('ab')) // ['ab', 'aB', 'Ab', 'AB'];
console.log(stringPermutations('abc'))


