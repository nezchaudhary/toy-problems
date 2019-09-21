
/*

In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

 

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
 

Note:  1 <= S.length <= 1000

*/

/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
   // keep track of start index
    // keep track of occurences
    // check if its greater than 3
    // then make a tuple and push to result
    if (!S.length) return [];
    const result = [];
    
    let start = 0;
    let i = 0;
    let count = 0;
    let char = '';
    while (i < S.length) {
        if (char === S[i]) {
            count++;
        } else if (char !== S[i] && char !== '') {
            if (count >= 3) {
                result.push([start, i - 1]);
            }
            char = S[i];
            count = 1;
            start = i;
        } else  {
            char = S[i];
            start = i;
            count++;
        }
        i++;
    }
    
    if (count >= 3) {
        result.push([start, i - 1]);
    }
    return result;
};

console.log('large group positions', largeGroupPositions('abbxxxxzzy'));
console.log('large group positions', largeGroupPositions('abcdddeeeeaabbbcd'));
console.log('large group positions', largeGroupPositions('abc'));
console.log('large group positions', largeGroupPositions('aa'));