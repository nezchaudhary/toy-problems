/* 
Given two strings, a and, b that may or may not be of the same length, determine the 
minimum number of character deletions required to make a and b anagrams.
Any characters can be deleted from either of the strings.
*/

const deleteCharacters = (a, b) => {
  const chars = {};
  for (let char1 of a) {
    chars[char1] ? chars[char1]++ : chars[char1] = 1;
  }

  let deleteCount = b.length;

  for (let char2 of b) {
    if (chars[char2] && chars[char2] > 0) {
      chars[char2]--;
      deleteCount--;
    }
  }
  
  for (let value in chars) {
    if (chars[value] > 0) {
      deleteCount += chars[value];
    }
  }
  return deleteCount;
}

console.log(deleteCharacters('cde', 'abc'));

