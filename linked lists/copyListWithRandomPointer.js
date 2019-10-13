/*

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

 

Example 1:



Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 

Note:

You must return the copy of the given head as a reference to the cloned list.

*/

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */



function Node(val,next,random) {
  this.val = val;
  this.next = next;
  this.random = random;
};


const copyRandomList = head => {
  if (head === null) {
    return null;
  }

  const visited = new Map();

  const getOrCreateNode = node => { 
    if (node !== null) {
      if (visited.has(node.val)) {
        return visited.get(node.val);
      } else {
        const newNode = new Node(node.val);
        visited.set(node.val, newNode);
        return newNode;
      }
    }
    return null;
  };

  let oldNode = head;
  let newNode = getOrCreateNode(oldNode);

  while (oldNode !== null) {
    newNode.random = getOrCreateNode(oldNode.random);
    newNode.next = getOrCreateNode(oldNode.next);
    oldNode = oldNode.next;
    newNode = newNode.next;
  }
  return visited.get(head.val);
};