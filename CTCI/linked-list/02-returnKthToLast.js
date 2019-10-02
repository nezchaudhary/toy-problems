/*
CTCI: 2.2 Return Kth to Last

Implement an algorithm to find the kth to last element of a singly linked list

*/
//Recursive Solution
// Time Complexity - O(n)
// Space Complexity - O(n)
const kthFromLastNodeRecursive = (head, k, result = null) => {
  if (head === null) {
    ;
  }
  
  const index = kthFromLastNodeRecursive(head.next, k, result) + 1;
  if (index === k) {
    console.log('kth from last', head.val);
  }
  return index;
};

//Iterative Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
const kthFromLastNodeIterative = (head, k) => {
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null;
    p1 = p1.next;
  }

  while(p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

// 2 passes
// Get length first and then  minus Kth node is k - 1.
// Time Complexity - O(2n)
// Space Complexity - O(1)
const KthFromLastTwoPasses = (head, n) => {
  // get the length - the linked list
  // subtract the nth node - 1
  // loop again and remove it
  // Better to create a dummy node to avoid length exceptions
  if (!head) return head;
  if (n === 0) return head;
  let listLength = 0;
  let current = head;
  
  while (current) {
    listLength++;
    current = current.next;
  }
  
  const toRemove = listLength - n + 1;
  if (listLength === 1 && n === 1) return null;
  if (listLength < n - 1) return null;
  console.log(listLength, toRemove);
  
  let prev = null
  let active = head;
  let currIndex = 1;
  while(active) {
      const remove = currIndex === toRemove;
      if (remove) {
          if (prev) {
              prev.next = active.next;
              return head;
          } else {
              active = active.next;
              return active;
          }
          break;
      } else {
          prev = active;
          active = active.next;
          currIndex++;
      }
  }
};