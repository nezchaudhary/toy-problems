/* 
Merge two sorted linked lists and return it as a new list.The new list should be made by splicing together the nodes of the first two lists.

  Example:

Input: 1 -> 2 -> 4, 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
 
 * Definition for singly - linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
  * /
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 === null && l2 === null) return null;
  let list;
  let current;
  let node;

  while (l1 !== null || l2 !== null) {
    if (l1 && l2) {

      // create smaller node for new list
      if (l1.val <= l2.val) {
        node = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        node = new ListNode(l2.val);
        l2 = l2.next;
      }

      // add to new list
    } else {
      if (l1) {
        node = new ListNode(l1.val);
        l1 = l1.next;
      }


      if (l2) {
        node = new ListNode(l2.val);
        l2 = l2.next;
      }
    }

    if (list) {
      current.next = node;
      current = current.next;
    } else {
      current = node;
      list = current;
    }

  }
  return list;
};