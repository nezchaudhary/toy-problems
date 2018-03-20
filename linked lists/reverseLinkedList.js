const node = (value) => {
  return {
    val: value,
    next: null,
  }
}

// recursive
const reverseLinkedList = (list, tail) => {
  
  let head = node(list.val);
  
  if (!tail) {
    tail = head;
  } else {
  head.next = tail;
  tail = head;
  }

  if (list.next) {
    return reverseLinkedList(list.next, tail);  
  }

  return head;
}


// iterative
// const reverseLinkedList = (list) => {
//   let head;
//   let start = list;

//   while (start !== null) {
//     let current = node(start.val);
//     if (!head) {
//       head = current;
//     } else {
//       current.next = head;
//       head = current;
//     }
//     start = start.next;
//   }

//   return head;
// }


/*

I: linkedlist
O: New Reversed Order Linkedlist
C: None
E: Empty list

Big O: O(n) since we have to traverse the whole linkedlist once

Transformation: 
  Recursive
  create tail node as undefined
  create head with current node value
  (1): tail is undefined, tail is current node, return recursive call of next node with tail
  (2): tail is defined, head node's next is assigned tail, tail becomes the new head, return recursive call with next node and new tail
  (3): tail is defined, head node's next is assigned tail, tail becomes the new head, return head because no next node;

  Iterative
  (1): make 1 the head and tail if not assigned
  (2): make 2 the new head and point it to the tail, make tail the new node;
  (3): make 3 the new head, point it to the 
 
// Recursive
const reverseLinkedList = (list, tail) => {
  make node of current value

  if tail is defined, 
    the current node's next is the tail
    tail becomes the current node
  else tail is the current node

  if there is a next node, return recursive call function with next node
  else return the current node
}

// Iterative 
const reverseLinkedList = (list) => {
  initialize head
  assign list as start
  
  while loop while start exists
    // make node with current value
    // if head is not assigned, head is current value
    // else current value's next is head
    // head becomes the current value
    // start becomes start's next

  return head when loop breaks;

*/

console.log(reversedLinkedList({ val: 1, next: { val: 2, next: { val: 3, next: null } } }));