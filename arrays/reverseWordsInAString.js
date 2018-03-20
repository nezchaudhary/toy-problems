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

const reverseWords = function (str) {
  let start = 0;
  let end = str.length - 1;
 
  const reverse = (str, start, end) => {
    while (start < end) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }

  reverse(str, start, end);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      reverse(str, start, i - 1);
      start = i + 1;
    }

    if (i === str.length - 1) {
      reverse(str, start, i);
    }
  }
  return str;
};

console.log(reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]));