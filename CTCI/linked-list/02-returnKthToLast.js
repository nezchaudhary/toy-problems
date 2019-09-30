/*
CTCI: 2.2 Return Kth to Last

Implement an algorithm to find the kth to last element of a singly linked list

*/
//Recursive Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
const kthFromLastNodeRecursive = (head, k, result = null) => {
  if (head === null) {
    ;
  }
  
  const index = kthFromLastNode(head.next, k, result) + 1;
  if (index === k) {
    console.log('kth from last', head.val);
  }
  return index;
};

//Iterative Solution
// Time Complexity - O(n)
// Space Complexity - O(n)
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