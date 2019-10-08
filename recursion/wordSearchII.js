/*
Trie

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.


Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]

Speed of solutions
Time Submitted | Status | Runtime | Memory | Language | Type
a few seconds ago  | Accepted |	92 ms |	52.9 MB |	javascript | Recursion 
a minute ago | 	Accepted | 7848 ms | 44.5 MB | javascript | Trie


Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.
*/

var findWords = function(board, words) {
  const ans = [];
  
  if (!board || !words || board.length < 1) return [];
  
  const root = buildTrie(words);
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, ans);
    }
  }
  
  return ans;
};

function dfs(board, i, j, trie, ans) {
  const w = board[i][j];
  
  if (!trie.children.has(w)) return;
  
  trie = trie.children.get(w);
  
  if (trie.word) {
    ans.push(trie.word);
    trie.word = null;
  }
  
  board[i][j] = '#';
  if (i > 0) dfs(board, i - 1, j, trie, ans); 
  if (j > 0) dfs(board, i, j - 1, trie, ans);
  if (i < board.length - 1) dfs(board, i + 1, j, trie, ans); 
  if (j < board[0].length - 1) dfs(board, i, j + 1, trie, ans); 
  board[i][j] = w;
}

function buildTrie(words) {
  const root = new TrieNode();
  words.forEach(w => {
    let node = root;
    for (let i = 0; i < w.length; i++) {
      let c = w[i];
      
      if (!node.children.has(c)) node.children.set(c, new TrieNode());

      node = node.children.get(c);
    }
    node.word = w;
  })
  
  return root;
}

class TrieNode {
  constructor() {
    this.word = null;
    this.children = new Map();
  }
}

console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain"]));
console.log(findWords([
  ['a','a'],
], ["aaa"]));