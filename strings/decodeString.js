/*

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

// Tree Problem
// Time Complexity O (2n)
// Space Complexity ) (O(n)) + O(k) call stack for recursion
// Not completely sure about time complexity
const isNumber = c => {
  return c >= '0' && c <= '9';
}

const multiply = (str, num) => {
  var result = '';
  for (let i = 0;i < num; i++) {
    result += str;
  }
  return result;
}


class TreeNode {
  constructor(val, parent = null) {
    this.val = val;
    this.parent = parent;
    this.children = [];
  }

  addChild(val) {
    const node = new TreeNode(val, this);
    this.children.push(node);
    return node;
  }
}


const buildTree = str => {
  const root = new TreeNode(1);
  let parent = root;
  let char = '';

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (isNumber(curr)) {
      char += curr;
    } else if (curr === '[') {
      parent = parent.addChild(Number(char));
      char = '';
    } else if (curr === ']') {
      parent = parent.parent;
    } else {
      parent.addChild(curr);
    }
  }
  return root;
}

const decodeString = str => {
  if (str.length === 0) return '';
  const tree = buildTree(str);
  return decode(tree);
}


const decode = tree => {
  let result = '';
  if (tree.children.length > 0) {
    tree.children.forEach(child => {
      if (child.children.length > 0) {
        result += decode(child);
      } else {
        result += child.val;
      }
    });
    return multiply(result, tree.val);
  }
  return result;
}

/**
* @param {string} s
* @return {string}
*/
// var decodeString = function(s) {
//   return decode(buildTree(s));
// };

console.log('decode string', decodeString('3[a2[bc]]'));
console.log('decode string', decodeString('3[a2[c]]'));