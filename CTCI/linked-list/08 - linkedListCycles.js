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
 * 
 * Follow up: Get node of cycle in linked list
 * 
 */

var Node = function (value) {
  return { value: value, next: null };
};

// Time Complexity O(n)
// Space Complexity O(n)
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
};

// Time Complexity O(n)
// Space Complexity O(1)
const hasCycleConstantSpace = head => {
  if (!head) return false;
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;   
    if (slow === fast) {
      break;
    }
  }
  
  if (fast === null || fast.next === null) {
    return false;
  }
  
  return true;
}

const getLoopStartNode = head => {
  if (!head) return false;
  let slow = head;
  let fast = head;
  
  // fast runner to get ahead in cycle by k steps when slow has moved k steps
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;  
    // they have to meet if there is a cycle 
    if (slow === fast) {
      break;
    }
  }
  
  // There was no cycle so no meeting point
  if (fast === null || fast.next === null) {
    return null;
  }

  // else there was a cycle
  // considering its a cycle, they met when fast is k steps away from meeting point which is also k steps from start
  // reset slow to head
  slow = head;

  // when they met, it will be k steps ahead
  // that is the node to return
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}




var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true