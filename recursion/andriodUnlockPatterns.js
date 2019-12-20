/*

Android Unlock Patterns

Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.


Rules for a valid pattern:

Each pattern must connect at least m keys and at most n keys.
All the keys must be distinct.
If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
The order of keys used matters.


Explanation:

| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
Invalid move: 4 - 1 - 3 - 6
Line 1 - 3 passes through key 2 which had not been selected in the pattern.

Invalid move: 4 - 1 - 9 - 2
Line 1 - 9 passes through key 5 which had not been selected in the pattern.

Valid move: 2 - 4 - 1 - 3 - 6
Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

Valid move: 6 - 5 - 4 - 1 - 9 - 2
Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.


Example:

Input: m = 1, n = 1
Output: 9

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
*/

// Time Complexity - O(n!)

const numberOfPatterns = (low, high) => {	
  const used = new Array(9);
  let result = 0;
  
  const isValid = (num, last) => {
    if (used[num]) return false;

    // first digit of the pattern    
    if (last === -1) return true;

    // knight moves or adjacent cells (in a row or in a column)	       
    if ((num + last) % 2 === 1) return true;

    // indexes are at both end of the diagonals for example 0,0, and 8,8          
    const mid = Math.floor((num + last) / 2);
    if (mid === 4) return used[mid];

    // adjacent cells on diagonal  - for example 0,0 and 1,0 or 2,0 and // 1,1
    if ((num % 3 !== last % 3) && (num / 3 !== last / 3)) {
      return true;
    }
    
    // all other cells which are not adjacent
    return used[mid];
  }
  
  const calcPatterns = (min, last) => {
    if (min === 0) return 1;    
    let sum = 0;
    for (let num = 0; num < 9; num++) {
      if (isValid(num, last)) {
        used[num] = true;
        sum += calcPatterns(min - 1, num);
        used[num] = false;                    
      }
    }
    return sum;
  }   

  
  for (let min = low; min <= high; min++) {	            
    result += calcPatterns(min, -1);
  }
  return result;
}

console.log(numberOfPatterns(1, 2));
console.log(numberOfPatterns(1, 1));

