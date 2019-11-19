/* Given a list of sorted characters letters containing only lowercase letters, and given a target 
letter target, 
  find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], 
the answer is 'a'

*/

const nextGreatestLetter = (letters, target, low = 0, high = letters.length - 1, highest = '') => {
  
  // Binary Search

  if (low > high) {
    return highest || letters[0];
  }

  let midpoint = Math.floor((high + low) / 2);

  if (letters[midpoint] > target && (letters[midpoint] < highest || highest === '')) {
    highest = letters[midpoint];
    return nextGreatestLetter(letters, target, low, midpoint - 1, highest);
  }

  return nextGreatestLetter(letters, target, midpoint + 1, high, highest);
}

console.log(nextGreatestLetter(['a', 'b'], 'z')); // 'a';
console.log(nextGreatestLetter(['c', 'd', 'f'], 'b')) // 'c