/*
Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

b a l l
a r e a
l e a d
l a d y
Note:
There are at least 1 and at most 1000 words.
All words will have the exact same length.
Word length is at least 1 and at most 5.
Each word contains only lowercase English alphabet a-z.
Example 1:

Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
Example 2:

Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
*/

/**
 * @param {string[]} words
 * @return {string[][]}
 */

// Runtime: 124 ms, faster than 88.89% of JavaScript online submissions for Word Squares.
// Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions for Word Squares.

class Trie {
  constructor(val = '', word = '') {
    this.val = val;
    this.children = new Array(26).fill(null);
    this.word = word;

  }

  getCode(val) {
    return val.charCodeAt(0);
  } 
  
  getOrAdd(val, word = '') {
    const code = this.getCode(val);
    let char = this.children[code - 97];
    if (!char) {
      char = new Trie(val, word);
      this.children[code - 97] = char;
    }
    return char;
  }
}

const createTrie = (words, maxWords, wordLength) => {
  const trie = new Trie();
  let curr = trie;
  
  for (let i = 0; i < maxWords; i++) {
    const word = words[i];
    for (let j = 0; j < wordLength; j++) {
      const char = words[i][j];
      curr = curr.getOrAdd(char, j === word.length - 1 ? word : '');
    }
    curr = trie;
  }
  return trie;
}

const wordSquares = words => {
  if (words === null || words.length === 0 || words[0].length == 0) return [];
  const trie = createTrie(words, words.length, words[0].length);
  const result = [];
  const square = new Array(words[0].length);
  square.fill(trie);
  findAllSquares(0, 0, square, result);
  return result;
}

const findAllSquares = (row, col, square, result) => {
  if(row === square.length) {
    const word = square.map(char => char.word);
    result.push(word);
  } else if (col < square.length) {
    const currRow = square[row];
    const currCol = square[col];
    for(let i = 0; i < 26; i++){
      if(currRow.children[i] !== null && currCol.children[i] !== null) {
        square[row] = currRow.children[i];
        square[col] = currCol.children[i];

        findAllSquares(row, col + 1, square, result);
      }
    }
    square[row] = currRow;
    square[col] = currCol;
  } else {
    findAllSquares(row + 1, row + 1, square, result);
  }
}

console.log(wordSquares(["area","lead","wall","lady","ball"]));
console.log(wordSquares(["abat","baba","atan","atal"]));
