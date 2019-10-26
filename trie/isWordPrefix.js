/*Given an array arr[] of strings, the task is to print the strings from the array which are not prefix of any other string from the same array.

Input: {apple, app, there, the, like}
Output: {apple, like, there}

*/
// [] (if input empty)
// [] (if no matches found)

// [‘a’, ‘ap’] // [‘ap’]
// [‘a’, ‘ap’, ‘apple’] // [‘apple’]

// create trie

// a
// P
// P (isword)
// L (isPrefix) e (isWord) (word string)


// A -> p -> p word(‘app’)-> l -> -> e (word == ‘apple’)


class Trie {
	constructor(char = null) {
    this.children = [];
    this.isPrefix = false;
    this.val = char;
    this.isWord = false;
  }	

  getIndex(char) {
    return char.charCodeAt(char) - 65;
  }

  getOrAddNode(char) {
    const code = this.getIndex(char);
    // if it exists 
    let node = this.children[code];
    if (node) {
      node.isPrefix = true;
    } else {
      node = new Trie(char);
      this.children[code] = node;
    }
    return node;
  }
}

const createTrie = words => {
	const trie = new Trie();
	let currentNode = trie;

	// loop to add words to trie
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		for (let j = 0; j < word.length; j++) {
      currentNode = currentNode.getOrAddNode(word[j]);
    }

    currentNode.isWord = true;
    currentNode = trie;
  }
  return trie;
}

const isPrefix = (word, trie) => {
  let curr = trie;
	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		const code = char.charCodeAt(0) - 65;
		curr = curr.children[code];	
  }
  return curr.isPrefix;
}



const filterPrefixStrings = (arr) => {
  const result = [];
	if (arr.length <= 1) return arr;
	const trie = createTrie(arr);

	// loop over input
	 // check if word is a prefix
	for (let i = 0; i < arr.length; i++) {
	const skip = isPrefix(arr[i], trie);
		if (!skip) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterPrefixStrings([])); // []
console.log(filterPrefixStrings(['a'])); // ['a']
console.log(filterPrefixStrings(['a', 'ap'])); // ['ap']
console.log(filterPrefixStrings(['app', 'ap', 'like'])); // ['app', 'like']
console.log(filterPrefixStrings(['apple', 'app', 'there', 'the', 'like'])); // ['apple', 'there', 'like']



