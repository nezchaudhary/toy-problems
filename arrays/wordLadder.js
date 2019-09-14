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




const wordSquares = () => {


  class Solution {
    class TrieNode {
        TrieNode[] children;
        boolean isWord;
        
        TrieNode() {
            children = new TrieNode[26];
        }
    }
    
    public List<List<String>> wordSquares(String[] words) {
        TrieNode root = buildTrie(words);
        List<List<String>> squares = new ArrayList<>();
        
        for (String word : words) {
            List<String> square = new ArrayList<>();
            square.add(word);
            wordSquares(root, word.length(), square, squares);
        }
        return squares;
    }
    
    private TrieNode buildTrie(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode current = root;
            for (char c : word.toCharArray()) {
                int index = c - 'a';
                if (current.children[index] == null) {
                    current.children[index] = new TrieNode();
                }
                current = current.children[index];
            }
            current.isWord = true;
        }
        return root;
    }
    
    private TrieNode search(TrieNode root, String prefix) {
        TrieNode current = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        return current;
    }
    
    private void wordSquares(TrieNode root, int len, List<String> square, List<List<String>> squares) {
        if (square.size() == len) {
            squares.add(new ArrayList<>(square));
            return;
        }

        String prefix = getPrefix(square, square.size());
        TrieNode node = search(root, prefix);
        if (node == null) {
            return;
        }
        
        List<String> children = new ArrayList<>();
        getChildren(node, prefix, children);
        for (String child : children) {
            square.add(child);
            wordSquares(root, len, square, squares);
            square.remove(square.size() - 1);
        }
    }
    
    private String getPrefix(List<String> square, int index) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < index; i++) {
            sb.append(square.get(i).charAt(index));
        }
        return sb.toString();
    }
    
    private void getChildren(TrieNode node, String s, List<String> children) {
        if (node.isWord) {
            children.add(s);
            return;
        }
        
        for (int i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                getChildren(node.children[i], s + (char) ('a' + i), children);
            }
        }
    }
}

}