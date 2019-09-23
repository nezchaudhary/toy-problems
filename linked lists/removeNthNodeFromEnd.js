/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

*/

// 2 passes
const removeNthFromEnd1 = (head, n) => {
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

// 1 pass
const removeNthFromEnd2 = (head, n) => {
  // use 2 pointers
  // first get to n
  // then start second pointer until first is null
  // second is at the value before the one that needs to be deleted

  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (i = 0; i <= n; i++) {
    first = first.next;
  };

  while(first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}