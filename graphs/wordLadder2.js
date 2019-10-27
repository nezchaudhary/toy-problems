/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

// Time Complexity - O(m x n)
// Space Complexity - O (m X n)
const isAdjacent = (w1, w2) => {
  let count = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) count++;
    if (count > 1) break;
  }
  return count === 1;
}

const ladderLength = (beginWord, endWord, wordList) => {
  let level = 0;
  let seen = {};
  let queue = [beginWord];

  while (queue.length) {
    let size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      for (let j = 0; j < wordList.length; j++) {
        let word = wordList[j];
        if (isAdjacent(curr, word)) {
          if (word === endWord) return level + 1;
          if (!seen[word]) {
            seen[word] = true;
            queue.push(word);
          }
        }
      }
    }
  }

  return 0;
};

/* ----------------------- */

// GRAPH Solution (One-directional)

// Time Complexity - O(m x n)
// Space Complexity - O (m X n)
const ladderLengthGraphOneDirectional = (beginWord, endWord, wordList) => {
  let wordGraph = wordList.includes(beginWord) ? createGraph(wordList) : createGraph([beginWord, ...wordList]);
  let beginningNode = wordGraph.getNode(beginWord);
  beginningNode.steps = 1;
  let queue = [beginningNode];

  while (queue.length) {
    let node = queue.shift();
    node.visited = true;

    if (node.word === endWord) return node.steps;

    for (let neighbor of node.neighbors) {
      if (neighbor.visited === false) {
        neighbor.steps = node.steps + 1;
        neighbor.visited = true;
        queue.push(neighbor);
      }
    }
  }

  return 0;
};

const createGraph  = (words) => {
  let graph = new Graph(words);

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isAdjacent(words[i], words[j])) {
        graph.addEdge(words[i], words[j]);
      }
    }
  }
  return graph;
}

class Graph {
  constructor(words) {
    this.nodes = [];
    this.graph = {};
    for (let word of words) {
      this.addNode(word);
    }
  }

  addEdge(w1, w2) {
    const firstNode = this.getNode(w1);
    const secondNode = this.getNode(w2);
    firstNode.neighbors.push(secondNode);
    secondNode.neighbors.push(firstNode);
  }

  addNode(word) {
    this.graph[word] = new WordNode(word);
    this.nodes.push(this.graph[word]);
  } 

  getNode(word) {
    if (!(word in this.graph)) return;
    return this.graph[word];
  }
}

class WordNode {
  constructor(word) {
    this.word = word;
    this.visited = false;
    this.visitedFromLeft = false;
    this.visitedFromRight = false;
    this.neighbors = [];
  }
}

console.log(ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLengthGraphOneDirectional('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));


