const checkWordChange = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
  }
  return count === 1;
}


const wordLadder = (start, end, dictionary, result = []) => {
  if (dictionary.length === 0) return [];
  if (start === end) {
    result.push(end);
    return;
  }
  result.push(start);
  let word;
  for (let i = 0; i < dictionary.length; i++) {
    if (checkWordChange(start, dictionary[i])) {
      word = dictionary[i];
      dictionary.splice(i, 1);
      break;
    }
  }

  wordLadder(word, end, dictionary, result);
  return result;


}

console.log(wordLadder('TOON', 'PLEA', ['POON', 'PLEE', 'SAME', 'POIE', 'PLEA', 'PLIE', 'POIN']));


// public int ladderLength(String beginWord, String endWord, List < String > wordList) {
//   if (!wordList.contains(endWord)) {
//     return 0;
//   }

//   Queue < String > q = new LinkedList<>();
//   q.add(beginWord);
//   Set < String > visited = new HashSet<>();
//   int lvl = 1;
//   Set < String > dict = new HashSet<>();
//   for (String s : wordList) {
//     dict.add(s);
//   }

//   while (!q.isEmpty()) {
//     int lvlsz = q.size();
//     for (int li = 0; li < lvlsz; li++) {
//       String word = q.poll();
//       if (word.equals(endWord)) {
//         return lvl;
//       }
//       for (int ci = 0; ci < word.length(); ci++) {
//         for (char c = 'a'; c <= 'z'; c++) {
//           char[] ch = word.toCharArray();
//           ch[ci] = c;
//           String newWord = new String(ch);
//           if (!visited.contains(newWord) && dict.contains(newWord)) {
//             q.add(newWord);
//             visited.add(newWord);
//           }
//         }
//       }
//     }
//     lvl++;
//   }

//   return 0;
// }


// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.children = [];
//   }

//   addChild(node) {
//     this.children.push(node);
//     return this;
//   }
// }

// class Graph {
//   constructor() {
//     this.nodes = new Map();
//   }

//   add(val1, val2) {
//     const node1 = this.nodes.get(val1) || new GraphNode(val1);
//     const node2 = this.nodes.get(val2) || new GraphNode(val2);
//     this.nodes.set(val1, node1.addChild(node2));
//     this.nodes.set(val2, node2.addChild(node1));
//   }

//   get(val) {
//     return this.nodes.get(val);
//   }
// }

// function ladderLength(beginWord, endWord, wordList) {
//   wordList.push(beginWord);
//   const graph = buildGraph(wordList);

//   let nodeBegin = graph.get(beginWord);
//   let nodeEnd = graph.get(endWord);
//   if (!nodeEnd) return 0;
//   nodeBegin.distance = nodeEnd.distance = 1;
//   nodeBegin.visitedBegin = nodeEnd.visitedEnd = true;

//   const queueBegin = [nodeBegin];
//   const queueEnd = [nodeEnd];

//   while (queueBegin.length || queueEnd.length) {
//     nodeBegin = queueBegin.shift() || new GraphNode();
//     nodeEnd = queueEnd.shift() || new GraphNode();

//     for (let child of nodeBegin.children) {
//       if (child.visitedEnd) {
//         return nodeBegin.distance + child.distance;
//       } else if (!child.visitedBegin) {
//         child.distance = nodeBegin.distance + 1;
//         child.visitedBegin = true;
//         queueBegin.push(child);
//       }
//     }

//     for (let child of nodeEnd.children) {
//       if (child.visitedBegin) {
//         return nodeEnd.distance + child.distance;
//       } else if (!child.visitedEnd) {
//         child.distance = nodeEnd.distance + 1;
//         child.visitedEnd = true;
//         queueEnd.push(child);
//       }
//     }
//   }

//   return 0;
// }

// function buildGraph(wordList) {
//   const graph = new Graph();
//   const wordSet = new Set(wordList);
//   const a = 'a'.charCodeAt(0);

//   for (let word of wordSet) {
//     for (let i = 0; i < word.length; i++) {
//       for (let j = 0; j < 26; j++) {
//         let transWord = word.substring(0, i) + String.fromCharCode(a + j) + word.substr(i + 1);
//         if (wordSet.has(transWord) && transWord !== word) {
//           graph.add(word, transWord);
//         }
//       }
//     }
//   }

//   return graph;
}