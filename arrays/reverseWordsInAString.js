/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */

 /*

 Given a character array, reverse the array word by word. A word is defined as a sequence of non-space characters.

The input array does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
return ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Could you do it in-place without allocating extra space?
Related problem: Rotate Array
*/

const reverseWords = arr => {
  if (arr.length < 2 ) return arr;

  let left = 0;
  let right = arr.length - 1;
  
  // reverse the whole array
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  let curr = 0;
  let start = 0;
  
  // every time you hit a word, reverse it back
  while (curr <= arr.length) {
    if (arr[curr] === ' ' || arr[curr] === undefined) {
      let end = curr - 1;
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
      start = curr + 1;
    }
    curr++;
  }
  
  return arr;
}


console.log(reverseWords([
  'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
  'm', 'a', 'k', 'e', 's', ' ',
  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' 
]));

console.log(reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]));