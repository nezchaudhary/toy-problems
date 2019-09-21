/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

const backspaceCompare = (s1, s2) => {
  let i = s1.length - 1;
  let j = s2.length - 1;
  let s1Spaces = 0;
  let s2Spaces = 0;

  while (i >= 0 || j >= 0) {

    while (i >= 0) {
      if (s1[i] === '#') {
        s1Spaces++;
        i--;
      } else if (s1Spaces > 0) {
        s1Spaces--;
        i--
      } else {
        break;
      }
    }


    while (j >= 0) {
      if (s2[j] === '#') {
        s2Spaces++;
        j--;
      } else if (s2Spaces > 0) {
        s2Spaces--;
        j--
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0 && s1[i] !== s2[j]) {
      return false;
    }

    if (i >= 0 !== j >= 0) {
      return false;
    }
    
    i--; j--;
  }
  return true;
}

console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('a#c', 'b'));
console.log(backspaceCompare('a##c', '#a#c'));
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));
console.log(backspaceCompare('bxj##tw', 'bxj###tw'));
console.log(backspaceCompare('bxj##tw', 'bxo#j##tw'));
console.log(backspaceCompare('y#fo##f', 'y#fx#o##f'));
console.log(backspaceCompare("j##yc##bs#srqpfzantto###########i#mwb",
"j##yc##bs#srqpf#zantto###########i#mwb"));
