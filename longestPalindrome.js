/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// manacher's algorithm

const longestPalindrome = (string) => {
  // i: string
  // o: longest palindrome string
  // c: spaces are valid
  // e: no palindrome? return empty string, ignore punctuation

  let palindrome = '';
  let palindromeLength = 1;

  for (let i = 0; i < string.length; i++) {
    let count = 1;
    let word = string[i];
    let prev = string[i - count];
    let next = string[i + count];

    while (prev === next) {
      word = prev + word + next;
      count++;
      prev = string[i - count];
      next = string[i + count];
    }

    if (word.length > palindromeLength) {
      palindromeLength = word.length;
      palindrome = word;
    }
  }

  return palindrome;
}

console.log(longestPalindrome("My dad is a racecar athlete")); //a racear a
console.log(longestPalindrome("athlete")); //ete