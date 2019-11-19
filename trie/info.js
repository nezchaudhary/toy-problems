/*

The term “trie” comes from the word retrieval, and is usually pronounced “try”, to distinguish it 
from other “tree” structures.

A trie is a tree-like data structure whose nodes store the letters of an alphabet. By structuring 
the nodes in a particular way, words and strings can be retrieved from the structure by traversing 
down a branch path of the tree.

The size of a trie is directly correlated to the size of all the possible values that the trie 
could represent.

As it turns out, both tries and hash tables are reminscient of one another because they both use
arrays under the hood. However, hash tables use arrays combined with linked lists, whereas tries 
use arrays combined with pointers/references.

he most obvious difference between hash tables and tries is that a trie has no need for a hash 
function, because every key can be represented in order (alphabetically), and is uniquely 
retrievable since every branch path to a string’s value will be unique to that key. The side effect 
of this is that there are no collisions to deal with, and thus a relying on the index of an array 
is enough, and a hashing function is unnecessary.

However, unlike hash tables, the downside of a trie is that is takes up a lot of memory and space 
with empty (null) pointers. We can imagine how a large trie would start grow in size, and with 
each node that was added, an entire array containing 26 null pointers would have to be initialized 
as well. For longer words, those empty references would probably never get filled up; for example, 
imagine we had a key “Honorificabilitudinitatibus”, with some value. That’s super long word, and 
we’re probably not going to be adding any other sub-branches to that word in the trie; that’s a 
bunch of empty pointers for each letter of that word that are taking up space, but not really ever 
being used!

Time Complexity:


On that note, let’s look quickly at the Big O time complexity of a trie data structure. The 
amount of time it takes to create a trie is tied directly to how many words/keys the trie contains, 
and how long those keys could potentially be. The worst-case runtime for creating a trie is a 
combination of m, the length of the longest key in the trie, and n, the total number of keys in the 
trie. Thus, the worst case runtime of creating a trie is O(mn).

Tries are possibly used for google's search auto complete algorithm and also used for matching 
algorithms and implementing things like spellcheckers, and can also be used for imlementing 
versions of radix sort, too.

In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree 
(as they can be searched by prefixes), is a kind of search tree—an ordered tree data structure 
that is used to store a dynamic set or associative array where the keys are usually strings. 
Unlike a binary search tree, no node in the tree stores the key associated with that node; 
instead, its position in the tree defines the key with which it is associated. All the descendants 
of a node have a common prefix of the string associated with that node, and the root is associated 
with the empty string. Values are not necessarily associated with every node. Rather, values tend 
only to be associated with leaves, and with some inner nodes that correspond to keys of interest. 
For the space-optimized presentation of prefix tree, see compact prefix tree.

      root
    /   \    \
    t   a     b
    |   |     |
    h   n     y
    |   |  \  |
    e   s  y  e
  /  |   |
  i  r   w
  |  |   |
  r  e   e
        |
        r

Insert and search costs O(key_length), however the memory requirements of Trie is 
O(ALPHABET_SIZE * key_length * N) where N is number of keys in Trie. There are efficient 
representation of trie nodes (e.g. compressed trie, ternary search tree, etc.) to minimize memory requirements of trie.

Time Complexity:
create: O(mn) (m is the longest key, n is the number of keys);
insert:, delete, search: O(an) (a is length of the word, n is th number of words);


*/

// Trie node
class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  _charToIndex(character) {
    return character.charCodeAt(0) - 'a'.charCodeAt(0);
    // return ascii code of character - a character code
  }
  
  insert(key) {
    let traverseTree = this.root;
    let length = key.length;
    for (let i = 0; i < length; i++) {
      let index = this._charToIndex(key[i]);
      if (!traverseTree.children[index]) {
        traverseTree.children[index] = new TrieNode();
      }
      traverseTree = traverseTree.children[index];
    }
    traverseTree.isEndOfWord = true;
  }

  search(key) {
    let traverseTree = this.root;
    for (let i = 0; i < key.length; i++) {
      let index = this._charToIndex(key[i]);
      if (!traverseTree.children[index]) {
        return false;
      } else {
        traverseTree = traverseTree.children[index];
      }
    }
    return traverseTree !== null && traverseTree.isEndOfWord;
  }

  delete(key) {

  }
}

let trie = new Trie();
let keys = ["the", "a", "there", "anaswe", "any", "by", "their"];
let output = ["Not present in trie", "Present in tire"]

for (let i = 0; i < keys.length; i++) {
  trie.insert(keys[i]);
};
console.log('trie', trie);
console.log('the', trie.search('the'));
console.log('the', trie.search('them'));

