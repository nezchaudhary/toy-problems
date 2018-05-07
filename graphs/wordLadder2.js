/*
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]

Rreturn
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/

const checkWordChange = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
  }
  return count === 1;
}


const wordLadder2 = (start, end, dictionary) => {
  
};

console.log(wordLadder2('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));
