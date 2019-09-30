/*
CTCI: Linked List
2.3 Delete Middle Node

Delete Middle Node: Implement an algorithm to delete a node in the middle. (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

EXAMPLE:
Input: the node c from the linked list a -> b -> c -> d -> e -> f
Result: nothing is returned, but the new linked list looks like a -> c -> d -> e -> f

*/

const deleteNode = (head) => {
  if (head === null || head.next === null) {
    return false;
  }

  // what about if its the last node i.e - there are only 2 nodes. Talk to interviewer about this

  const next = head.next;
  head.next = next.next;
  return true;
}
