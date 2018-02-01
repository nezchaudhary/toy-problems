/* 
Determine whether an integer is a palindrome. Can negative numbers be palindromes? No.

7337 returns true
1337 returns false

*/

const isIntegerPalindrome = (integer) => {
  let left = 0;
  let right = (integer + '').length - 1;

  while (left < right) {
    if ((integer + '')[left] !== (integer + '')[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isIntegerPalindrome(7447)); // true
console.log(isIntegerPalindrome(1337)); // false