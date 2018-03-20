function isListPalindrome(l) {

  // create stack approach
  
  // slow  & fast pointer
  let slow = l;
  let fast = l;

  //create a stack
  let stack = [];

  // loop while fast pointer desont reach end of list and push values to stack
  // slow moves one step at a time
  while (fast !== null && fast.next !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // if odd count of list, move to next value;
  if (fast !== null) {
    slow = slow.next;
  }

  // check if each value at slow pointer until it reaches the end matches values in stack.
  while (slow !== null) {
    if (slow.value !== stack.pop()) {
      return false;
    }
    slow = slow.next;
  }
  return true;

  // reversed list approach

  // let reverseList = (head) => {
  //   let list = null;

  //   while (head !== null) {
  //     let node = new ListNode(head.value);
  //     node.next = list;
  //     list = node;
  //     head = head.next;
  //   }
  //   return list;
  // }

  // let reversed = reverseList(l);

  // while (l !== null && reversed !== null) {
  //   if (l.value !== reversed.value) {
  //     return false;
  //   }
  //   l = l.next;
  //   reversed = reversed.next;
  // }
  // return l === null && reversed === null;
}