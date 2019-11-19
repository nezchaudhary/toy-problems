-/*
You have two arrays of strings, words and parts.Return an array that contains the strings from words, modified so that any occurrences of the substrings from parts are surrounded by square brackets[], following these guidelines:

If several parts substrings occur in one string in words, choose the longest one.If there is still more than one such part, then choose the one that appears first in the string.

  Example

For words = ["Apple", "Melon", "Orange", "Watermelon"] and parts = ["a", "mel", "lon", "el", "An"], the output should be
findSubstrings(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"].

  While "Watermelon" contains three substrings from the parts array, "a", "mel", and "lon", "mel" is the longest substring that appears first in the string.

    Input / Output

    [execution time limit]4 seconds(js)

    [input] array.string words

An array of strings consisting only of uppercase and lowercase English letters.

Guaranteed constraints:
0 ≤ words.length ≤ 104,
  1 ≤ words[i].length ≤ 30.

  [input] array.string parts

An array of strings consisting only of uppercase and lower English letters.Each string is no more than 5 characters in length.

Guaranteed constraints:
0 ≤ parts.length ≤ 105,
  1 ≤ parts[i].length ≤ 5,
    parts[i]≠ parts[j].

[output] array.string

*/

class TrieNode {
  constructor(letter) {
    this.letter = letter;
    this.end = false;
    this.children = {};
  }

  addWord(word) {
    let node = this;
    for (let char = 0; char < word.length; char++) {
      let letter = word[char];
      if (!node.children[letter]) {
        let newNode = new TrieNode(letter);
        node.children[letter] = newNode;
        node = node.children[letter];
      }
    }
    node.end = true;
  }
}

const findSubstrings = (words, parts) => {

  const findSubstringInWord = (word, tree) => {
    let longestSubString = 0;
    let longestSubStringIndex = 0;
    let node;

    for (let char = 0; char < word.length; char++) {
      node = tree;
      for (let pos = char; pos < word.length; pos++) {
        let letter = word[pos];
        if (!node.children[letter]) {
          break;
        } else {
          node = node.children[letter];
          let length = pos - char + 1;
          if (node.end && length > longestSubString) {
            longestSubString = length;
            longestSubStringIndex = char;
          }
        }
      } 
    }
    if (longestSubString === 0) {
      return word;
    } else {
      let end = longestSubStringIndex + longestSubString;
      return `${word.slice(0, longestSubStringIndex)}[${word.slice(longestSubStringIndex, end)}]${word.slice(end)}`
    }
  }

  let trie = new TrieNode('');
  for (let i = 0; i < parts.length; i++) {
    trie.addWord(parts[i]);
  }

  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(findSubstringInWord(words[i], trie));
  }
  return result;
}

// console.log(findSubstrings(["Apple", "Melon", "Orange", "Watermelon"], ["a", "mel", "lon", "el", "An"]));
let words = ["neuroses",
  "myopic",
  "sufficient",
  "televise",
  "coccidiosis",
  "gules",
  "during",
  "construe",
  "establish",
  "ethyl"];


let parts = ["aaaaa",
"Aaaa",
"E",
"z",
"Zzzzz",
"a",
"mel",
"lon",
"el",
"An",
"ise",
"d",
"g",
"wnoVV",
"i",
"IUMc",
"P",
"KQ",
"QfRz",
"Xyj",
  "yiHS"];

console.log(findSubstrings(words, parts));
/*

["[n]euroses", 
"myopic",
  "sufficie[n]t",
  "telev[ise]",
  "cocci[d]iosis",
  "[g]ules",
  "[d]uring",
  "co[n]strue",
  "establish",
  "ethyl"]

  */

  //should be

  /*

  ["neuroses",
 "myop[i]c",
 "suff[i]cient",
 "telev[ise]",
 "cocc[i]diosis",
 "[g]ules",
 "[d]uring",
 "construe",
 "est[a]blish",
 "ethyl"]

 */