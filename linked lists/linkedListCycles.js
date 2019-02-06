/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function (value) {
  return { value: value, next: null };
};

var hasCycle = function (linkedList) {
  // i: linkedList
  // o: boolean if linkedList has a cycle
  // c: constant space, linear time, no mutation of linkedList
  // e: 

  // naive solution - ignore space and use linear time
  // traverse over linkedList and keep track of all values visited
  // check if current node value has been visited before
  // if yes, return true 
  // if not, continue to traverse until you next value is null
  // if the loop breaks, it means that its not a cycle so return false

  const visited = {}
  visited[linkedList.value] = true;

  let current = linkedList.next;
  while (current) {
    if (visited[current.value]) {
      return true;
    } else {
      visited[current.value] = true;
      current = current.next;
    }
  }
  return false;

  // constraint of constant space
  // maybe keep a counter for nodes
  // if the counter keep going into a loop
  // it is a cycle
  // how to check for loop ?? big question



};


var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true